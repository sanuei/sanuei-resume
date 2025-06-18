# 个人作品集网站 - Tailwind CSS 重新设计版

这是一个现代化的个人作品集网站，采用 **Tailwind CSS** 进行了全面重新设计，展示个人项目和技能。

## 🎨 设计更新亮点

### 全新现代简约设计
- ✨ 使用 **Tailwind CSS** 实现现代化UI设计
- 🌙 深色主题配色方案，视觉效果更加专业
- 💫 流畅的动画效果和交互体验
- 📱 完全响应式布局，适配所有设备

### 技术栈升级
- **Tailwind CSS** - 现代化的 CSS 框架
- **HTML5** - 语义化标记
- **JavaScript (ES6+)** - 原生 JavaScript，无依赖
- **Font Awesome 6.4.0** - 最新图标库
- **Google Fonts** - Inter & Orbitron 字体

## 🌐 网站预览

[Sanuei个人网站](https://sanuei.github.io/sanuei-resume/)

## 📄 页面展示

### 1. 主页 (index.html)
- 🎯 英雄区域展示，包含浮动动画背景
- 👤 个人介绍和技能标签展示
- 🔗 快速导航到其他页面
- 🌍 多语言支持切换

### 2. 简历页 (resume.html)
- 📋 现代卡片式简历布局
- 🎓 教育背景时间线展示
- 💼 工作经历详细信息
- 🛠️ 技术技能分类展示
- 🏆 资格证书展示

### 3. 项目页 (projects.html)
- 📊 项目统计数据展示
- 💻 项目卡片式布局
- 🏷️ 技术栈标签系统
- 📈 项目详细信息展示

### 4. GitHub页 (github.html)
- 📱 GitHub API 实时数据集成
- 📊 个人统计数据展示
- 🗂️ 仓库展示网格布局
- 🔄 智能缓存机制

## 🎨 设计特色

### 配色方案
```css
--primary: #6366f1     /* 主色调 - 靛蓝 */
--secondary: #8b5cf6   /* 次要色 - 紫色 */
--accent: #06b6d4      /* 强调色 - 青色 */
--dark: #0f172a        /* 深色背景 */
--dark-light: #1e293b  /* 浅深色 */
```

### 视觉效果
- 🌈 渐变文字效果
- 🔍 毛玻璃效果 (Glass morphism)
- 🎭 悬停动画效果
- 💫 浮动背景装饰
- ⚡ 平滑过渡动画

## 🚀 功能特点

- 🎨 **现代深色主题设计** - 专业的视觉体验
- 📱 **完全响应式布局** - 适配手机、平板、桌面
- 🔍 **项目展示系统** - 清晰的项目信息展示
- 🔄 **GitHub API 集成** - 实时显示 GitHub 数据
- 📄 **在线简历展示** - 完整的个人履历
- 🌐 **多语言支持** - 中文/英文/日文切换
- ⚡ **性能优化** - 快速加载和流畅交互
- 🔒 **跨浏览器兼容性** - 支持现代浏览器

## 🛠️ 技术实现

### Tailwind CSS 配置
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                accent: '#06b6d4',
                dark: '#0f172a',
                'dark-light': '#1e293b',
            },
            fontFamily: {
                'display': ['Orbitron', 'sans-serif'],
                'body': ['Inter', 'sans-serif'],
            }
        }
    }
}
```

### 响应式设计
- **移动优先** - Mobile-first 设计方法
- **断点系统** - sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- **弹性布局** - Flexbox 和 Grid 布局系统
- **自适应组件** - 根据屏幕大小自动调整

## 📁 项目结构

```
sanuei-resume/
├── index.html          # 主页 - 全新 Tailwind 设计
├── resume.html         # 简历页 - 卡片式布局
├── projects.html       # 项目页 - 现代项目展示
├── github.html         # GitHub页 - API集成展示
├── css/                # 原有 CSS 文件（已被 Tailwind 替代）
│   ├── style.css       # 保留作为参考
│   ├── resume.css      # 保留作为参考
│   ├── projects.css    # 保留作为参考
│   └── github.css      # 保留作为参考
├── js/
│   ├── main.js         # 更新适配 Tailwind 的交互逻辑
│   ├── hero-animation.js # 英雄区域动画
│   ├── projects.js     # 项目过滤功能
│   ├── github.js       # 更新的 GitHub API 集成
│   └── i18n.js         # 多语言支持
└── README.md           # 更新的项目文档
```

## 🔧 安装和运行

1. **克隆仓库**：
   ```bash
   git clone https://github.com/Sanuei/sanuei-resume.git
   ```

2. **进入项目目录**：
   ```bash
   cd sanuei-resume
   ```

3. **使用本地服务器运行**（任选其一）：
   - **VS Code Live Server** 扩展
   - **Python 服务器**：
     ```bash
     python -m http.server 8000
     ```
   - **Node.js 服务器**：
     ```bash
     npx http-server
     ```

4. **在浏览器中访问**：
   - http://localhost:8000 (Python)
   - http://localhost:8080 (http-server)

## ⚙️ 自定义配置

### 1. 修改个人信息
- 更新各 HTML 文件中的个人信息
- 在 `js/github.js` 中更改 GitHub 用户名
- 修改社交媒体链接

### 2. 更新项目展示
- 在 `projects.html` 中添加或修改项目信息
- 自定义项目分类和技术标签

### 3. 主题定制
- 修改 Tailwind 配置中的颜色变量
- 调整字体和间距设置
- 自定义动画效果

### 4. 多语言内容
- 在 `js/i18n.js` 中添加或修改翻译内容
- 支持新的语言选项

## 🎯 性能优化

- **CDN 加载** - Tailwind CSS 通过 CDN 快速加载
- **图片优化** - 使用适当的图片格式和大小
- **缓存策略** - GitHub API 数据智能缓存
- **懒加载** - 图片和内容的懒加载实现
- **代码分割** - JavaScript 模块化加载

## 📱 浏览器支持

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ 移动端浏览器

## 🔄 更新日志

### 2024-12-21 - Tailwind CSS 重新设计
- 🎨 **全面重新设计** - 使用 Tailwind CSS 重构所有页面
- 💫 **现代化UI** - 采用现代简约设计风格
- 📱 **响应式优化** - 改进移动端体验
- ⚡ **性能提升** - 优化加载速度和交互体验
- 🛠️ **代码重构** - JavaScript 代码现代化改进

### 2024-03-21 - 原版功能
- 🔗 更新了社交媒体链接
- 📺 新增了 YouTube 链接
- 📷 新增了 Instagram 链接
- 🐦 更新了 Twitter 链接

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进项目！

### 贡献指南
1. Fork 本项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情。

---

## 🌟 技术亮点

### Tailwind CSS 优势
- **原子化CSS** - 高度可复用的工具类
- **响应式设计** - 内置的响应式断点系统
- **深度定制** - 灵活的配置选项
- **性能优化** - 只加载使用的样式
- **维护性强** - 一致的设计系统

### 现代化特性
- **CSS Grid & Flexbox** - 现代布局技术
- **CSS 变量** - 动态主题切换
- **Web API** - 现代浏览器API使用
- **ES6+ 语法** - 现代JavaScript特性
- **无依赖** - 纯原生技术实现

### 用户体验
- **快速加载** - 优化的资源加载策略
- **流畅动画** - 60fps 的动画效果
- **直观导航** - 清晰的信息架构
- **无障碍访问** - 符合可访问性标准

---

**开发者**: [Sanuei](https://github.com/Sanuei)  
**设计**: 现代简约风格  
**技术栈**: Tailwind CSS + Vanilla JavaScript  
**许可证**: MIT
