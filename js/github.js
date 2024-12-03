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
            <div class="loading">
                <i class="fas fa-spinner fa-spin"></i>
                <p>正在加载数据...</p>
            </div>
        `;
    }

    updateProfile(profile) {
        // 更新个人信息显示
        document.querySelector('.profile-info h1').textContent = profile.name || profile.login;
        document.querySelector('.profile-bio').textContent = profile.bio || 'Full Stack Developer';
        
        // 更新统计数据
        document.getElementById('followers').textContent = profile.followers;
        document.getElementById('following').textContent = profile.following;
        document.getElementById('publicRepos').textContent = profile.public_repos;
    }

    updateStats(profile, repos) {
        // 更新统计卡片
        document.getElementById('repoCount').textContent = profile.public_repos;
        
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        document.getElementById('totalStars').textContent = totalStars;

        const languages = repos.map(repo => repo.language).filter(Boolean);
        const topLanguage = this.getMostFrequent(languages);
        document.getElementById('topLanguage').textContent = topLanguage || 'N/A';
    }

    updateRepositories(repos) {
        const repoGrid = document.getElementById('repoGrid');
        if (repos.length === 0) {
            repoGrid.innerHTML = `<p class="no-repos" data-i18n="noRepos">暂无公开仓库</p>`;
            return;
        }

        repoGrid.innerHTML = repos.map(repo => this.createRepoCard(repo)).join('');
        // 更新完DOM后重新应用翻译
        translate(currentLang);
    }

    createRepoCard(repo) {
        return `
            <div class="repo-card">
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || '暂无描述'}</p>
                <div class="repo-stats">
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                    ${repo.language ? `<span><i class="fas fa-circle"></i> ${repo.language}</span>` : ''}
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
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p data-i18n="error">获取GitHub数据时出错，请稍后再试。</p>
                <button onclick="location.reload()" class="retry-btn">
                    <i class="fas fa-sync"></i> <span data-i18n="retry">重试</span>
                </button>
            </div>
        `;
        // 更新完DOM后重新应用翻译
        translate(currentLang);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new GitHubUI('sanuei');
}); 