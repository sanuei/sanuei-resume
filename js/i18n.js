// 翻译数据对象
const translations = {
    zh: {
        // 导航栏
        'home': '首页',
        'resume': '简历',
        'projects': '项目',
        'github': 'GitHub',

        // 首页
        'hello': '你好，我是 Yann',
        'role': '全栈开发工程师 | 摄影爱好者',
        'view-github': 'GitHub',
        'view-resume': '我的简历',

        // 简历页面
        'resume-title': '履历書',
        'surname': '楊',
        'firstname': '尚衛',
        'surname-phonetic': 'ヤン',
        'firstname-phonetic': 'サンウエイ',
        'address': '東京都江戸川区一之江',
        'education': '学历背景',
        'workExperience': '工作经历',
        'skills': '技术技能',
        'certificates': '资格证书',
        'selfIntro': '自我介绍',
        'present': '现在',
        
        // 学历信息
        'study-period': '2022.10 - 2023.10',
        'school-1': '大原日本语学院',
        'major-1': '日语学习',
        'school-2': '南京艺术学院',
        'major-2': '数字媒体艺术',
        
        // 工作经历
        'company-1': '(株)名川ネットワーク',
        'position-1': 'Web开发工程师',
        'company-2': '(株)Great Navigation',
        'position-2': 'Web开发工程师',
        'company-3': '南京德基广场有限公司',
        'position-3': '媒体设计师',
        
        // 技能分类
        'backend-skills': '后端开发',
        'frontend-skills': '前端开发',
        'ai-tools': 'AI工具',
        'design-skills': '设计技能',
        'graphic-design': '平面设计',
        'video-editing': '视频编辑',
        'photography': '摄影',
        
        // 证书
        'jlpt-n2': '日本語能力試験N2',
        
        // 自我介绍
        'intro-p1': '作为全栈开发工程师，我精通从Java/SpringBoot后端开发到HTML/CSS/JavaScript前端开发的全面技术栈。',
        'intro-p2': '对AI技术有浓厚兴趣，积极运用ChatGPT和GitHub Copilot等最新AI工具，提高开发效率和代码质量。',

        // GitHub页面
        'githubName': 'Yan Sanuei',
        'githubBio': '全栈开发工程师 | 开源爱好者',
        'followers': '关注者',
        'following': '关注中',
        'repositories': '仓库数量',
        'stars': '获得星标',
        'mainLanguage': '主要语言',
        'popularRepos': '热门仓库',
        'loading': '加载中...',
        'noDescription': '暂无描述',
        'error': '获取GitHub数据时出错，请稍后再试。',
        'retry': '重试',

        // 项目页面
        'projects-title': '项目履历',
        'all': '全部',
        'webDev': 'Web开发',
        'mobileDev': '移动应用',
        'otherProjects': '其他项目',
        'project1-title': 'e-staffing人才派遣管理系统',
        'project2-title': '通信方式选定工具（电柱）',
        'project3-title': 'Java编程培训项目',
        'environment': '开发环境',
        'technologies': '开发语言',
        'tools': '开发工具',
        'project-overview': '项目概要',
        'project1-overview': '开发一个统一管理多家人才派遣公司业务联系和信息的系统。实现人才派遣业务的效率化和管理简单化。',
        'responsibilities': '负责内容',
        'project1-resp1': '设计和实现客户信息管理功能',
        'project1-resp2': '数据库设计和API开发',
        'project1-resp3': '前端页面实现',
        'project1-resp4': '进行单元测试'
    },
    
    en: {
        // Navigation
        'home': 'Home',
        'resume': 'Resume',
        'projects': 'Projects',
        'github': 'GitHub',

        // Home page
        'hello': "Hello, I'm Yann",
        'role': 'Full Stack Developer | Photography Enthusiast',
        'view-github': 'GitHub',
        'view-resume': 'My Resume',

        // Resume page
        'resume-title': 'Resume',
        'surname': 'Yan',
        'firstname': 'Sanuei',
        'surname-phonetic': 'Yan',
        'firstname-phonetic': 'Sanuei',
        'address': 'Ichinoe, Edogawa-ku, Tokyo',
        'education': 'Education',
        'workExperience': 'Work Experience',
        'skills': 'Skills',
        'certificates': 'Certificates',
        'selfIntro': 'About Me',
        'present': 'Present',

        // Education
        'study-period': '2022.10 - 2023.10',
        'school-1': 'O-HARA Japanese Language School',
        'major-1': 'Japanese Language Studies',
        'school-2': 'Nanjing University of the Arts',
        'major-2': 'Digital Media Arts',

        // Work Experience
        'company-1': 'Nagawa Network Co., Ltd.',
        'position-1': 'Web Developer',
        'company-2': 'Great Navigation Co., Ltd.',
        'position-2': 'Web Developer',
        'company-3': 'Nanjing Deji Plaza Co., Ltd.',
        'position-3': 'Media Designer',

        // Skills
        'backend-skills': 'Backend Development',
        'frontend-skills': 'Frontend Development',
        'ai-tools': 'AI Tools',
        'design-skills': 'Design Skills',
        'graphic-design': 'Graphic Design',
        'video-editing': 'Video Editing',
        'photography': 'Photography',

        // Certificates
        'jlpt-n2': 'JLPT N2 Certificate',

        // Self Introduction
        'intro-p1': 'As a full-stack developer, I am proficient in a comprehensive technology stack from Java/SpringBoot backend development to HTML/CSS/JavaScript frontend development.',
        'intro-p2': 'With a strong interest in AI technology, I actively utilize the latest AI tools such as ChatGPT and GitHub Copilot to improve development efficiency and code quality.',

        // GitHub page
        'githubName': 'Yan Sanuei',
        'githubBio': 'Full Stack Developer | Open Source Enthusiast',
        'followers': 'Followers',
        'following': 'Following',
        'repositories': 'Repositories',
        'stars': 'Stars',
        'mainLanguage': 'Main Language',
        'popularRepos': 'Popular Repositories',
        'loading': 'Loading...',
        'noDescription': 'No description',
        'error': 'Error loading GitHub data. Please try again later.',
        'retry': 'Retry',

        // Projects page
        'projects-title': 'Project Portfolio',
        'all': 'All',
        'webDev': 'Web Development',
        'mobileDev': 'Mobile Development',
        'otherProjects': 'Other Projects',
        'project1-title': 'e-staffing Personnel Management System',
        'project2-title': 'Communication Method Selection Tool',
        'project3-title': 'Java Programming Training',
        'environment': 'Environment',
        'technologies': 'Technologies',
        'tools': 'Tools',
        'project-overview': 'Project Overview',
        'project1-overview': 'Development of a centralized system for managing communications and information with multiple staffing agencies.',
        'responsibilities': 'Responsibilities',
        'project1-resp1': 'Design and implementation of client information management',
        'project1-resp2': 'Database design and API development',
        'project1-resp3': 'Frontend implementation',
        'project1-resp4': 'Unit testing'
    },

    ja: {
        // 导航栏
        'home': 'ホーム',
        'resume': '履歴書',
        'projects': 'プロジェクト',
        'github': 'GitHub',

        // 首页
        'hello': 'はじめまして、Yannです',
        'role': 'フルスタックエンジニア | 写真愛好家',
        'view-github': 'GitHub',
        'view-resume': '履歴書',

        // 简历页面
        'resume-title': '履歴書',
        'surname': '楊',
        'firstname': '尚衛',
        'surname-phonetic': 'ヤン',
        'firstname-phonetic': 'サンウエイ',
        'address': '東京都江戸川区一之江',
        'education': '学歴',
        'workExperience': '職歴',
        'skills': 'スキル',
        'certificates': '資格',
        'selfIntro': '自己紹介',
        'present': '現在',

        // 学历信息
        'study-period': '2022.10 - 2023.10',
        'school-1': '大原日本語学院',
        'major-1': '日本語学習',
        'school-2': '南京芸術学院',
        'major-2': 'デジタルメディアアート',

        // 工作经历
        'company-1': '株式会社名川ネットワーク',
        'position-1': 'Webエンジニア',
        'company-2': '株式会社Great Navigation',
        'position-2': 'Webエンジニア',
        'company-3': '南京徳基広場有限会社',
        'position-3': 'メディアデザイナー',

        // 技能分类
        'backend-skills': 'バックエンド開発',
        'frontend-skills': 'フロントエンド開発',
        'ai-tools': 'AIツール',
        'design-skills': 'デザインスキル',
        'graphic-design': 'グラフィックデザイン',
        'video-editing': '動画編集',
        'photography': '写真撮影',

        // 证书
        'jlpt-n2': '日本語能力試験N2',

        // 自我介绍
        'intro-p1': 'フルスタック開発者として、Java/SpringBootバックエンド開発からHTML/CSS/JavaScriptフロントエンド開発まで、幅広い技術スタックを持っています。',
        'intro-p2': 'AI技術に強い関心を持ち、ChatGPTやGitHub Copilotなどの最新のAIツールを積極的に活用し、開発効率とコード品質の向上に取り組んでいます。',

        // GitHub页面
        'githubName': 'Yan Sanuei',
        'githubBio': 'フルスタックエンジニア | オープンソース愛好家',
        'followers': 'フォロワー',
        'following': 'フォロー中',
        'repositories': 'リポジトリ',
        'stars': 'スター',
        'mainLanguage': '主要言語',
        'popularRepos': '人気のリポジトリ',
        'loading': '読み込み中...',
        'noDescription': '説明なし',
        'error': 'データの取得に失敗しました。後でもう一度お試しください。',
        'retry': '再試行',

        // 项目页面
        'projects-title': 'プロジェクト履歴',
        'all': '全て',
        'webDev': 'Web開発',
        'mobileDev': 'モバイル開発',
        'otherProjects': 'その他',
        'project1-title': 'e-staffing人材派遣管理システム',
        'project2-title': '通信方式選定ツール（電柱）',
        'project3-title': 'Javaプログラミング研修',
        'environment': '開発環境',
        'technologies': '開発言語',
        'tools': '開発ツール',
        'project-overview': 'プロジェクト概要',
        'project1-overview': '複数の人材派遣会社との業務連絡や情報管理を一元化するシステムの開発。',
        'responsibilities': '担当業務',
        'project1-resp1': '顧客情報管理機能の設計・実装',
        'project1-resp2': 'データベース設計とAPI開発',
        'project1-resp3': 'フロントエンド画面の実装',
        'project1-resp4': '単体テストの実施'
    }
};

// 当前语言
let currentLang = 'zh';

// 翻译函数
function translate(lang) {
    currentLang = lang;
    
    // 保存语言选择到本地存储
    localStorage.setItem('preferred-language', lang);
    
    // 更新所有带有 data-i18n 属的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // 如果元素是输入框，更新 placeholder
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // 更新言选择器的激活状态
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