/**
 * 缓存管理类
 * 处理数据的本地存储和过期逻辑
 */
class CacheManager {
    constructor(ttl = 3600000) { // 默认缓存1小时
        this.ttl = ttl;
    }

    /**
     * 设置缓存
     * @param {string} key - 缓存键名
     * @param {*} data - 要缓存的数据
     */
    set(key, data) {
        const item = {
            data,
            timestamp: Date.now()
        };
        localStorage.setItem(key, JSON.stringify(item));
    }

    /**
     * 获取缓存
     * @param {string} key - 缓存键名
     * @returns {*} 缓存的数据或null
     */
    get(key) {
        const item = localStorage.getItem(key);
        if (!item) return null;

        const { data, timestamp } = JSON.parse(item);
        const now = Date.now();

        // 检查缓存是否过期
        if (now - timestamp > this.ttl) {
            localStorage.removeItem(key);
            return null;
        }

        return data;
    }

    /**
     * 清除指定的缓存
     * @param {string} key - 缓存键名
     */
    clear(key) {
        localStorage.removeItem(key);
    }

    /**
     * 清除所有缓存
     */
    clearAll() {
        localStorage.clear();
    }
}

/**
 * GitHub API 封装类
 */
class GitHubAPI {
    constructor(username) {
        this.username = username;
        this.baseUrl = 'https://api.github.com';
        this.cache = new CacheManager();
    }

    /**
     * 获取用户个人资料
     */
    async getProfile() {
        const cacheKey = `github_profile_${this.username}`;
        
        // 尝试从缓存获取数据
        const cachedData = this.cache.get(cacheKey);
        if (cachedData) {
            console.log('Using cached profile data');
            return cachedData;
        }

        try {
            const response = await fetch(`${this.baseUrl}/users/${this.username}`);
            if (!response.ok) throw new Error('Failed to fetch profile');
            
            const data = await response.json();
            
            // 缓存新数据
            this.cache.set(cacheKey, data);
            return data;
        } catch (error) {
            console.error('Error fetching profile:', error);
            throw error;
        }
    }

    /**
     * 获取用户的仓库列表
     */
    async getRepositories() {
        const cacheKey = `github_repos_${this.username}`;
        
        // 尝试从缓存获取数据
        const cachedData = this.cache.get(cacheKey);
        if (cachedData) {
            console.log('Using cached repositories data');
            return cachedData;
        }

        try {
            const response = await fetch(
                `${this.baseUrl}/users/${this.username}/repos?sort=stars&per_page=6`
            );
            if (!response.ok) throw new Error('Failed to fetch repositories');
            
            const data = await response.json();
            
            // 缓存新数据
            this.cache.set(cacheKey, data);
            return data;
        } catch (error) {
            console.error('Error fetching repositories:', error);
            throw error;
        }
    }
}

/**
 * GitHub UI 处理类
 */
class GitHubUI {
    constructor(username) {
        this.api = new GitHubAPI(username);
        this.initUI();
    }

    async initUI() {
        try {
            // 显示加载状态
            this.showLoading();

            const [profile, repos] = await Promise.all([
                this.api.getProfile(),
                this.api.getRepositories()
            ]);
            
            this.updateProfile(profile);
            this.updateStats(profile, repos);
            this.updateRepositories(repos);
        } catch (error) {
            console.error('Error initializing UI:', error);
            this.showError();
        }
    }

    showLoading() {
        const repoGrid = document.getElementById('repoGrid');
        repoGrid.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-12 loading">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <p class="text-gray-400">正在加载仓库数据...</p>
            </div>
        `;
    }

    updateProfile(profile) {
        // 更新个人信息显示
        const nameElement = document.querySelector('h2[data-i18n="githubName"]');
        const bioElement = document.querySelector('.profile-bio');
        
        if (nameElement) {
            nameElement.textContent = profile.name || profile.login;
        }
        if (bioElement) {
            bioElement.textContent = profile.bio || 'Full Stack Developer';
        }
        
        // 更新统计数据
        const followersEl = document.getElementById('followers');
        const followingEl = document.getElementById('following');
        const publicReposEl = document.getElementById('publicRepos');
        
        if (followersEl) followersEl.textContent = profile.followers;
        if (followingEl) followingEl.textContent = profile.following;
        if (publicReposEl) publicReposEl.textContent = profile.public_repos;
    }

    updateStats(profile, repos) {
        // 更新统计卡片
        const repoCountEl = document.getElementById('repoCount');
        const totalStarsEl = document.getElementById('totalStars');
        const topLanguageEl = document.getElementById('topLanguage');
        
        if (repoCountEl) {
            repoCountEl.textContent = profile.public_repos;
        }
        
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        if (totalStarsEl) {
            totalStarsEl.textContent = totalStars;
        }

        const languages = repos.map(repo => repo.language).filter(Boolean);
        const topLanguage = this.getMostFrequent(languages);
        if (topLanguageEl) {
            topLanguageEl.textContent = topLanguage || 'JavaScript';
        }
    }

    updateRepositories(repos) {
        const repoGrid = document.getElementById('repoGrid');
        if (repos.length === 0) {
            repoGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-400" data-i18n="noRepos">暂无公开仓库</p>
                </div>
            `;
            return;
        }

        repoGrid.innerHTML = repos.map(repo => this.createRepoCard(repo)).join('');
        // 更新完DOM后重新应用翻译
        if (typeof translate === 'function' && typeof currentLang !== 'undefined') {
        translate(currentLang);
        }
    }

    createRepoCard(repo) {
        return `
            <div class="repo-card bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div class="flex items-start justify-between mb-4">
                    <h3 class="text-lg font-semibold">
                        <a href="${repo.html_url}" target="_blank" rel="noopener" 
                           class="text-white hover:text-primary transition-colors duration-300 flex items-center">
                            ${repo.name}
                            <i class="fas fa-external-link-alt ml-2 text-sm opacity-60"></i>
                        </a>
                    </h3>
                    ${repo.language ? `
                        <span class="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                            ${repo.language}
                        </span>
                    ` : ''}
                </div>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    ${repo.description || '<span data-i18n="noDescription">暂无描述</span>'}
                </p>
                <div class="flex items-center justify-between text-sm text-gray-500">
                    <div class="flex items-center space-x-4">
                        <span class="flex items-center">
                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                            ${repo.stargazers_count}
                        </span>
                        <span class="flex items-center">
                            <i class="fas fa-code-branch text-blue-400 mr-1"></i>
                            ${repo.forks_count}
                        </span>
                    </div>
                    <span class="text-xs text-gray-500">
                        ${new Date(repo.updated_at).toLocaleDateString('zh-CN')}
                    </span>
                </div>
            </div>
        `;
    }

    getMostFrequent(arr) {
        if (arr.length === 0) return null;
        return arr.sort((a,b) =>
            arr.filter(v => v === a).length - arr.filter(v => v === b).length
        ).pop();
    }

    showError() {
        const repoGrid = document.getElementById('repoGrid');
        repoGrid.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-12">
                <div class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <i class="fas fa-exclamation-circle text-red-400 text-2xl"></i>
                </div>
                <p class="text-gray-400 mb-4" data-i18n="error">获取GitHub数据时出错，请稍后再试。</p>
                <button onclick="location.reload()" 
                        class="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors duration-300">
                    <i class="fas fa-sync mr-2"></i> 
                    <span data-i18n="retry">重试</span>
                </button>
            </div>
        `;
        // 更新完DOM后重新应用翻译
        if (typeof translate === 'function' && typeof currentLang !== 'undefined') {
        translate(currentLang);
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new GitHubUI('sanuei');
}); 