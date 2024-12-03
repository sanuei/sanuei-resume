// 翻译数据对象
const translations = {
    zh: {
        // 导航栏
        'home': '首页',
        'resume': '简历',
        'projects': '项目履历',
        'github': 'GitHub',

        // 首页内容
        'hello': '你好，我是 Yann',
        'role': '全栈开发工程师 | 摄影爱好者',
        'view-github': 'GitHub',
        'view-resume': '我的简历',

        // 简历页面
        'education': '学历背景',
        'workExperience': '工作经历',
        'skills': '技术技能',
        'certificates': '资格证书',
        'selfIntro': '自我介绍',
        'surname': '楊',
        'firstname': '尚衛',
        'surname-phonetic': 'ヤン',
        'firstname-phonetic': 'サンウエイ',
        'address': '東京都江戸川区一之江',
        'present': '现在',
        'school-1': '大原日本語学院',
        'major-1': '日语学习',
        'school-2': '南京藝術學院',
        'major-2': '媒体设计专业',
        'company-1': '(株)名川ネットワーク',
        'position-1': 'Web开发工程师',
        'backend': '后端开发',
        'frontend': '前端开发',
        'ai-tools': 'AI工具',
        'design-skills': '设计技能',
        'jlpt-n2-desc': '日语能力测试二级',
        'intro-p1': '我是一名热爱学习的开发者，拥有媒体设计背景和Web开发经验。通过不断学习和实践，我掌握了全栈开发所需的各种技能。我相信只要有努力和热情，在任何领域都能取得进步。',
        'intro-p2': '8年的滑板经历教会我坚持和专注的重要性，同时也帮助我建立了广泛的人际网络，丰富了我的人生经验。',

        // GitHub页面
        'repositories': '仓库数量',
        'stars': '获得星标',
        'mainLanguage': '主要语言',
        'popularRepos': '热门仓库',
        'loading': '加载中...',
        'noDescription': '暂无描述',
        'error': '获取GitHub数据时出错，请稍后再试。',
        'retry': '重试',

        // 项目页面
        'all': '全部',
        'webDev': 'Web开发',
        'mobileDev': '移动应用',
        'otherProjects': '其他项目',

        // 在 translations 对象中添加新的翻译项
        'githubName': 'Yan Sanuei',
        'githubBio': '全栈开发工程师 | 开源爱好者',
        'followers': '关注者',
        'following': '关注中',
        'repositories': '仓库数量',
        'stars': '获得星标',
        'mainLanguage': '主要语言',
        'popularRepos': '热门仓库',
        'location': '东京，日本',
        'company': '@名川ネットワーク',
        'website': '个人网站',

        // 项目1：e-staffing系统
        'project1-title': 'e-staffing人才派遣管理系统',
        'environment': '开发环境',
        'technologies': '开发语言',
        'tools': '开发工具',
        'project-overview': '项目概要',
        'project1-overview': '开发一个统一管理多家人才派遣公司业务联系和信息的系统。实现人才派遣业务的效率化和管理简单化。',
        'responsibilities': '负责内容',
        'project1-resp1': '设计和实现客户信息管理功能',
        'project1-resp2': '数据库设计和API开发',
        'project1-resp3': '前端页面实现',
        'project1-resp4': '进行单元测试',
    },
    en: {
        // Navigation
        'home': 'Home',
        'resume': 'Resume',
        'projects': 'Project History',
        'github': 'GitHub',

        // Home content
        'hello': "Hello, I'm Yan Sanuei",
        'role': 'Full Stack Developer | Photography Enthusiast',
        'view-github': 'GitHub',
        'view-resume': 'My Resume',

        // Resume page
        'education': 'Education',
        'workExperience': 'Work Experience',
        'skills': 'Skills',
        'certificates': 'Certificates',
        'selfIntro': 'About Me',

        // GitHub page
        'repositories': 'Repositories',
        'stars': 'Stars',
        'mainLanguage': 'Main Language',
        'popularRepos': 'Popular Repositories',
        'loading': 'Loading...',
        'noDescription': 'No description',
        'error': 'Error loading GitHub data. Please try again later.',
        'retry': 'Retry',

        // Projects page
        'all': 'All',
        'webDev': 'Web Development',
        'mobileDev': 'Mobile Development',
        'otherProjects': 'Other Projects',

        // 在 translations 对象中添加新的翻译项
        'githubName': 'Yan Sanuei',
        'githubBio': 'Full Stack Developer | Open Source Enthusiast',
        'followers': 'Followers',
        'following': 'Following',
        'repositories': 'Repositories',
        'stars': 'Stars',
        'mainLanguage': 'Main Language',
        'popularRepos': 'Popular Repositories',
        'location': 'Tokyo, Japan',
        'company': '@Nagawa Network',
        'website': 'Website',

        // 项目1：e-staffing系统
        'project1-title': 'e-staffing Personnel Dispatch Management System',
        'environment': 'Environment',
        'technologies': 'Technologies',
        'tools': 'Tools',
        'project-overview': 'Project Overview',
        'project1-overview': 'Development of a centralized system for managing communications and information with multiple staffing agencies. Achieved efficiency in personnel dispatch operations and simplified management.',
        'responsibilities': 'Responsibilities',
        'project1-resp1': 'Design and implementation of client information management',
        'project1-resp2': 'Database design and API development',
        'project1-resp3': 'Frontend implementation',
        'project1-resp4': 'Unit testing',
    },
    ja: {
        // ナビゲーション
        'home': 'ホーム',
        'resume': '履歴書',
        'projects': 'プロジェクト履歴',
        'github': 'GitHub',

        // ホームページ
        'hello': 'はじめまして、 楊尚衛です',
        'role': 'フルスタックエンジニア | 写真愛好家',
        'view-github': 'GitHub',
        'view-resume': '履歴書',

        // 履歴書ページ
        'education': '学歴',
        'workExperience': '職歴',
        'skills': 'スキル',
        'certificates': '資格',
        'selfIntro': '自己紹介',

        // GitHubページ
        'repositories': 'リポジトリ数',
        'stars': 'スター数',
        'mainLanguage': 'メイン言語',
        'popularRepos': '人気のリポジトリ',
        'loading': '読み込み中...',
        'noDescription': '説明なし',
        'error': 'データの取得に失敗しました。後でもう一度お試しください。',
        'retry': '再試行',

        // プロジェクトページ
        'all': '全て',
        'webDev': 'Web開発',
        'mobileDev': 'モバイル開発',
        'otherProjects': 'その他',

        // 在 translations 对象中添加新的翻译项
        'githubName': 'Yan Sanuei',
        'githubBio': 'フルスタックエンジニア | オープンソース愛好家',
        'followers': 'フォロワー',
        'following': 'フォロー中',
        'repositories': 'リポジトリ',
        'stars': 'スター',
        'mainLanguage': '主要言語',
        'popularRepos': '人気のリポジトリ',
        'location': '東京、日本',
        'company': '@名川ネットワーク',
        'website': 'ウェブサイト',

        // 项目1：e-staffing系统
        'project1-title': 'e-staffing人材派遣管理システム',
        'environment': '開発環境',
        'technologies': '開発言語',
        'tools': '開発ツール',
        'project-overview': 'プロジェクト概要',
        'project1-overview': '複数の人材派遣会社との業務連絡や情報管理を一元化するシステムの開発。人材派遣業務の効率化と管理の簡素化を実現。',
        'responsibilities': '担当業務',
        'project1-resp1': '取引先情報管理機能の設計・実装',
        'project1-resp2': 'データベース設計及びAPI開発',
        'project1-resp3': 'フロントエンド画面の実装',
        'project1-resp4': '単体テストの実施',
    }
};

// 当前语言
let currentLang = 'zh';

// 翻译函数
function translate(lang) {
    currentLang = lang;
    
    // 保存语言选择到本地存储
    localStorage.setItem('preferred-language', lang);
    
    // 更新所有带有 data-i18n 属��的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 更新语言选择器的激活状态
    document.querySelectorAll('.language-menu a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-lang') === lang);
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    // 从本地存储获取之前选择的语言，如果没有则使用默认语言
    const savedLang = localStorage.getItem('preferred-language') || 'zh';
    
    // 绑定语言切换事件
    document.querySelectorAll('.language-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            translate(lang);
        });
    });
    
    // 初始化翻译
    translate(savedLang);
}); 