# 个人作品集网站

这是一个现代化的个人作品集网站，采用响应式设计，展示个人项目和技能。

## 功能特点

- 🎨 现代深色主题设计
- 📱 完全响应式布局
- 🔍 项目展示过滤系统
- 🔄 GitHub API 集成
- 📄 在线简历展示
- 🌐 跨浏览器兼容性

## 技术栈

- HTML5
- CSS3 (使用CSS变量实现主题)
- JavaScript (原生ES6+)
- Font Awesome 图标
- GitHub REST API

## 项目结构
personal-portfolio/
├── index.html # 主页
├── resume.html # 简历页面
├── projects.html # 项目展示页面
├── github.html # GitHub集成页面
├── css/
│ ├── style.css # 全局样式
│ ├── resume.css # 简历页面样式
│ ├── projects.css # 项目页面样式
│ └── github.css # GitHub页面样式
├── js/
│ ├── main.js # 主要JavaScript功能
│ ├── projects.js # 项目过滤功能
│ └── github.js # GitHub API集成
└── README.md # 项目文档

## 安装和运行

1. 克隆仓库：
   
bash
git clone https://github.com/yourusername/personal-portfolio.git

3. 进入项目目录：
bash
cd personal-portfolio

4. 使用本地服务器运行项目（任选其一）：
   - 使用 VS Code Live Server 扩展
   - 使用 Python 简单服务器：
     ```bash
     python -m http.server 8000
     ```
   - 使用 Node.js http-server：
     ```bash
     npx http-server
     ```

5. 在浏览器中访问：
   - http://localhost:8000 (Python)
   - http://localhost:8080 (http-server)

## 自定义配置

1. 修改个人信息：
   - 更新 index.html 中的名字和标题
   - 在 resume.html 中更新简历内容
   - 在 js/github.js 中更改 GitHub 用户名

2. 更新项目展示：
   - 在 projects.html 中添加或修改项目卡片
   - 自定义项目分类和标签

3. 主题定制：
   - 在 css/style.css 中修改 :root 变量以更改配色方案

## 注意事项

- GitHub API 有请求限制，未认证用户每小时60次
- 确保图片资源经过优化以提升加载性能
- 部署时注意更新所有相对路径

## 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

## 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情。
