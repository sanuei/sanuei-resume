// 翻译数据对象
const translations = {
    zh: {
        // 导航栏
        'home': '首页',
        'resume': '简历',
        'projects': '项目',
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
        'school-1': '大原日本语学院',
        'major-1': '日语学习',
        'school-2': '南京艺术学院',
        'major-2': '媒体设计专业',
        'company-1': '(株)名川ネットワーク',
        'position-1': 'Web开发工程师',
        'backend': '后端开发',
        'frontend': '前端开发',
        'ai-tools': 'AI工具',
        'design-skills': '设计技能',
        'jlpt-n2-desc': '日语能力测试二级',
        'intro-p1': '作为全栈开发工程师，我精通从Java/SpringBoot后端开发到HTML/CSS/JavaScript前端开发的全面技术栈。',
        'intro-p2': '对AI技术有浓厚兴趣，积极运用ChatGPT和GitHub Copilot等最新AI工具，提高开发效率和代码质量。',
        'intro-p3': '在团队开发中，熟练使用Git和SVN进行版本管理，实践敏捷开发方法，为项目高效推进做出贡献。',
        'intro-p4': '保持对新技术的探索精神，通过持续学习提升技术能力。特别关注云计算和微服务架构，正在准备AWS认证。',

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

        'resume-title': '履历书',

        // 项目页面翻译
        'projects-title': '项目履历',
        'project1-title': 'e-staffing人才派遣管理系统',
        'project2-title': '通信方式选定工具（电柱）',
        'project3-title': 'Java编程培训项目',
        
        'environment': '开发环境',
        'language': '开发语言',
        'frontend': '前端技术',
        'tools': '开发工具',
        
        'project1-desc': '复数派遣公司一元化管理系统',
        'project2-desc': '从Struts迁移到Springboot的项目',
        'project3-desc': 'Java基础到Web开发的综合培训',

        // 简历页面翻译
        'resume-title': '履历书',
        'name': '杨尚卫',
        'name-phonetic': 'ヤン サンウエイ',
        'address': '东京都江户川区一之江',
        
        'education': '学历背景',
        'work-experience': '工作经历',
        'skills': '技术技能',
        'certificates': '资格证书',
        
        'school1': '大原日本语学院',
        'major1': '日语学习',
        'school2': '南京艺术学院',
        'major2': '媒体设计专业',
        
        'company1': '名川网络株式会社',
        'position1': 'Web开发工程师',
        'company2': 'Great Navigation株式会社',
        'position2': 'Web开发工程师',
        
        'backend-skills': '后端开发',
        'frontend-skills': '前端开发',
        'ai-tools': 'AI工具',
        'design-skills': '设计技能',
        
        'jlpt-n2': '日语能力测试N2级',

        // 添加新的翻译项
        'company3': '南京德基广场有限公司',
        'position3': '媒体设计师',
        'graphic-design': '平面设计',
        'video-editing': '视频编辑',
        'photography': '摄影'
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

        'resume-title': 'Resume',

        // Projects page translations
        'projects-title': 'Project Portfolio',
        'project1-title': 'e-staffing Personnel Management System',
        'project2-title': 'Communication Method Selection Tool',
        'project3-title': 'Java Programming Training',
        
        'environment': 'Environment',
        'language': 'Programming Languages',
        'frontend': 'Frontend Tech',
        'tools': 'Development Tools',
        
        'project1-desc': 'Centralized management system for multiple staffing companies',
        'project2-desc': 'Migration project from Struts to Springboot',
        'project3-desc': 'Comprehensive training from Java basics to Web development',

        // Resume page translations
        'resume-title': 'Resume',
        'name': 'Yang Shangwei',
        'name-phonetic': 'Yan Sanuei',
        'address': 'Ichinoe, Edogawa-ku, Tokyo',
        
        'education': 'Education',
        'work-experience': 'Work Experience',
        'skills': 'Technical Skills',
        'certificates': 'Certificates',
        
        'school1': 'O-HARA Japanese Language School',
        'major1': 'Japanese Language Studies',
        'school2': 'Nanjing University of the Arts',
        'major2': 'Media Design',
        
        'company1': 'Nagawa Network Co., Ltd.',
        'position1': 'Web Developer',
        'company2': 'Great Navigation Co., Ltd.',
        'position2': 'Web Developer',
        
        'backend-skills': 'Backend Development',
        'frontend-skills': 'Frontend Development',
        'ai-tools': 'AI Tools',
        'design-skills': 'Design Skills',
        
        'jlpt-n2': 'JLPT N2 Certificate',

        // 添加新的翻译项
        'company3': 'Nanjing Deji Plaza Co., Ltd.',
        'position3': 'Media Designer',
        'graphic-design': 'Graphic Design',
        'video-editing': 'Video Editing',
        'photography': 'Photography',
        'intro-p1': 'As a full-stack developer, I am proficient in a comprehensive technology stack from Java/SpringBoot backend development to HTML/CSS/JavaScript frontend development.',
        'intro-p2': 'With a strong interest in AI technology, I actively utilize the latest AI tools such as ChatGPT and GitHub Copilot to improve development efficiency and code quality.',
        'intro-p3': 'In team development, I am skilled in version control using Git and SVN, practicing agile development methodologies to contribute to efficient project progression.',
        'intro-p4': 'Maintaining a spirit of exploration for new technologies, I continuously improve my technical capabilities through ongoing learning. Particularly interested in cloud computing and microservice architecture, currently preparing for AWS certification.'
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
        'mainLanguage': 'メイ言語',
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

        'resume-title': '履歴書',

        // プロジェクトページの翻訳
        'projects-title': 'プロジェクト履歴',
        'project1-title': 'e-staffing人材派遣管理システム',
        'project2-title': '通信方式選定ツール（電柱）',
        'project3-title': 'Javaプログラミング研修',
        
        'environment': '開発環境',
        'language': '開発言語',
        'frontend': 'フロントエンド',
        'tools': '開発ツール',
        
        'project1-desc': '複数の派遣会社との業務を一元管理するシステム',
        'project2-desc': 'StrutsからSpringbootへの移行プロジェクト',
        'project3-desc': 'Java基礎からWeb開発までの総合的な研修',

        // 履歴書ページの翻訳
        'resume-title': '履歴書',
        'name': '楊尚衛',
        'name-phonetic': 'ヤン サンウエイ',
        'address': '東京都江戸川区一之江',
        
        'education': '学歴',
        'work-experience': '職歴',
        'skills': 'スキル',
        'certificates': '資格',
        
        'school1': '大原日本語学院',
        'major1': '日本語学習',
        'school2': '南京芸術学院',
        'major2': 'メディアデザイン',
        
        'company1': '株式会社名川ネットワーク',
        'position1': 'Webエンジニア',
        'company2': '株式会社Great Navigation',
        'position2': 'Webエンジニア',
        
        'backend-skills': 'バックエンド開発',
        'frontend-skills': 'フロントエンド開発',
        'ai-tools': 'AIツール',
        'design-skills': 'デザインスキル',
        
        'jlpt-n2': '日本語能力試験N2',

        // 添加新的翻译项
        'company3': '南京徳基広場有限会社',
        'position3': 'メディアデザイナー',
        'graphic-design': 'グラフィックデザイン',
        'video-editing': 'ビデオ編集',
        'photography': '撮影',
        'intro-p1': 'フルスタック開発者として、Java/SpringBootを中心としたバックエンド開発から、HTML/CSS/JavaScriptによるフロントエンド開発まで、幅広い技術スタックを持っています。',
        'intro-p2': 'AI技術に強い関心を持ち、ChatGPTやGitHub Copilotなどの最新のAIツールを積極的に活用し、開発効率の向上とコード品質の改善に取り組んでいます。',
        'intro-p3': 'チーム開発においては、GitやSVNを用いたバージョン管理、アジャイル開発手法を実践し、効率的なプロジェクト進行に貢献してきました。',
        'intro-p4': '新しい技術への探究心を持ち、継続的な学習を通じて技術力の向上に努めています。特に、クラウドコンピューティングやマイクロサービスアーキテクチャに関心があり、AWS認定資格の取得を目指しています。'
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