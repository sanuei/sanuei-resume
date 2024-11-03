class GitHubAPI {
    constructor(username) {
        this.username = username;
        this.baseUrl = 'https://api.github.com';
    }

    async getProfile() {
        const response = await fetch(`${this.baseUrl}/users/${this.username}`);
        return await response.json();
    }

    async getRepositories() {
        const response = await fetch(
            `${this.baseUrl}/users/${this.username}/repos?sort=stars&per_page=6`
        );
        return await response.json();
    }
}

class GitHubUI {
    constructor(username) {
        this.api = new GitHubAPI(username);
        this.initUI();
    }

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

    updateStats(profile, repos) {
        document.getElementById('repoCount').textContent = profile.public_repos;
        
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        document.getElementById('totalStars').textContent = totalStars;

        const languages = repos.map(repo => repo.language).filter(Boolean);
        const topLanguage = this.getMostFrequent(languages);
        document.getElementById('topLanguage').textContent = topLanguage || 'N/A';
    }

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

    getMostFrequent(arr) {
        return arr.sort((a,b) =>
            arr.filter(v => v === a).length - arr.filter(v => v === b).length
        ).pop();
    }

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

// 初始化GitHub页面
document.addEventListener('DOMContentLoaded', () => {
    new GitHubUI('sanuei'); // 使用你的GitHub用户名
}); 