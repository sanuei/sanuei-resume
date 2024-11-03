/**
 * GitHub API 封装类
 * 处理与GitHub API的所有交互
 */
class GitHubAPI {
    /**
     * @param {string} username - GitHub用户名
     */
    constructor(username) {
        this.username = username;
        this.baseUrl = 'https://api.github.com';
    }

    /**
     * 获取用户个人资料
     * @returns {Promise<Object>} 用户资料数据
     */
    async getProfile() {
        const response = await fetch(`${this.baseUrl}/users/${this.username}`);
        return await response.json();
    }

    /**
     * 获取用户的仓库列表
     * @returns {Promise<Array>} 仓库列表数据
     */
    async getRepositories() {
        const response = await fetch(
            `${this.baseUrl}/users/${this.username}/repos?sort=stars&per_page=6`
        );
        return await response.json();
    }
}

/**
 * GitHub UI 处理类
 * 负责页面渲染和用户交互
 */
class GitHubUI {
    /**
     * @param {string} username - GitHub用户名
     */
    constructor(username) {
        this.api = new GitHubAPI(username);
        this.initUI();
    }

    /**
     * 初始化UI，获取并显示数据
     */
    async initUI() {
        try {
            const profile = await this.api.getProfile();
            const repos = await this.api.getRepositories();
            
            this.updateProfile(profile);
            this.updateStats(profile, repos);
            this.updateRepositories(repos);
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
            this.showError();
        }
    }

    /**
     * 更新个人资料显示
     * @param {Object} profile - 用户资料数据
     */
    updateProfile(profile) {
        const profileElement = document.getElementById('profile');
        profileElement.innerHTML = `
            <div class="profile-avatar">
                <img src="${profile.avatar_url}" alt="${profile.name}">
            </div>
            <div class="profile-info">
                <h1>${profile.name}</h1>
                <p>${profile.login}</p>
                <p class="profile-bio">${profile.bio || ''}</p>
            </div>
        `;
    }

    /**
     * 更新统计信息显示
     * @param {Object} profile - 用户资料数据
     * @param {Array} repos - 仓库列表数据
     */
    updateStats(profile, repos) {
        // 更新仓库数量
        document.getElementById('repoCount').textContent = profile.public_repos;
        
        // 计算并更新总星标数
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        document.getElementById('totalStars').textContent = totalStars;

        // 计算并更新最常用语言
        const languages = repos.map(repo => repo.language).filter(Boolean);
        const topLanguage = this.getMostFrequent(languages);
        document.getElementById('topLanguage').textContent = topLanguage || 'N/A';
    }

    /**
     * 更新仓库列表显示
     * @param {Array} repos - 仓库列表数据
     */
    updateRepositories(repos) {
        const repoGrid = document.getElementById('repoGrid');
        repoGrid.innerHTML = repos.map(repo => `
            <div class="repo-card">
                <h3>${repo.name}</h3>
                <p>${repo.description || '暂无描述'}</p>
                <div class="repo-stats">
                    <span class="repo-stat">
                        <i class="fas fa-star"></i>
                        ${repo.stargazers_count}
                    </span>
                    <span class="repo-stat">
                        <i class="fas fa-code-branch"></i>
                        ${repo.forks_count}
                    </span>
                    <span class="repo-stat">
                        <i class="fas fa-circle"></i>
                        ${repo.language || 'N/A'}
                    </span>
                </div>
            </div>
        `).join('');
    }

    /**
     * 获取数组中出现最多的元素
     * @param {Array} arr - 输入数组
     * @returns {*} 出现频率最高的元素
     */
    getMostFrequent(arr) {
        return arr.sort((a,b) =>
            arr.filter(v => v === a).length - arr.filter(v => v === b).length
        ).pop();
    }

    /**
     * 显示错误信息
     */
    showError() {
        const container = document.querySelector('.github-container');
        container.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>获取GitHub数据时出错，请稍后再试。</p>
            </div>
        `;
    }
}

// 页面加载完成后初始化GitHub页面
document.addEventListener('DOMContentLoaded', () => {
    new GitHubUI('sanuei');
}); 