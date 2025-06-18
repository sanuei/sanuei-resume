/**
 * 导航栏和菜单交互功能
 * 适配 Tailwind CSS 的现代化个人网站
 */
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('nav');

    /**
     * 切换菜单显示状态
     * 点击汉堡按钮时触发
     */
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡
            
            // 切换菜单显示状态
            if (navLinks.classList.contains('opacity-0')) {
                navLinks.classList.remove('opacity-0', 'invisible');
                navLinks.classList.add('opacity-100', 'visible');
            } else {
                navLinks.classList.add('opacity-0', 'invisible');
                navLinks.classList.remove('opacity-100', 'visible');
            }
            
            // 切换汉堡按钮图标
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        /**
         * 点击导航链接时关闭菜单
         * 仅在移动端视图下生效
         */
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.add('opacity-0', 'invisible');
                    navLinks.classList.remove('opacity-100', 'visible');
                    
                    // 恢复汉堡按钮图标
                    const icon = navToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                }
            });
        });

        /**
         * 点击页面其他区域时关闭菜单
         * 仅在移动端视图且菜单打开时生效
         */
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                !navbar.contains(e.target) && 
                !navLinks.classList.contains('opacity-0')) {
                // 关闭菜单
                navLinks.classList.add('opacity-0', 'invisible');
                navLinks.classList.remove('opacity-100', 'visible');
                
                // 恢复汉堡按钮图标
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }

    /**
     * 页面滚动效果
     * 添加导航栏背景透明度变化
     */
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // 滚动时增加背景不透明度
                navbar.classList.remove('bg-dark/80');
                navbar.classList.add('bg-dark/95');
            } else {
                // 回到顶部时恢复半透明
                navbar.classList.remove('bg-dark/95');
                navbar.classList.add('bg-dark/80');
            }
        });
    }

    /**
     * 语言下拉菜单交互
     * 处理桌面端和移动端的语言切换
     */
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageMenu = document.querySelector('.language-menu');
    
    if (languageDropdown && languageMenu) {
        // 桌面端悬停效果
        languageDropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                languageMenu.classList.remove('opacity-0', 'invisible');
                languageMenu.classList.add('opacity-100', 'visible');
            }
        });
        
        languageDropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                     languageMenu.classList.add('opacity-0', 'invisible');
                 languageMenu.classList.remove('opacity-100', 'visible');
             }
         });

         // 移动端点击效果
         const languageBtn = languageDropdown.querySelector('.language-btn');
         if (languageBtn) {
             languageBtn.addEventListener('click', function(e) {
                 if (window.innerWidth <= 768) {
                     e.preventDefault();
                     languageMenu.classList.toggle('opacity-0');
                     languageMenu.classList.toggle('invisible');
                     languageMenu.classList.toggle('opacity-100');
                     languageMenu.classList.toggle('visible');
                 }
             });
         }
     }

     /**
      * 平滑滚动效果
      * 为页面内锚点链接添加平滑滚动
      */
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             const target = document.querySelector(this.getAttribute('href'));
             if (target) {
                 target.scrollIntoView({
                     behavior: 'smooth',
                     block: 'start'
                 });
             }
         });
     });

     /**
      * 页面加载动画
      * 为页面元素添加渐入效果
      */
     const observerOptions = {
         threshold: 0.1,
         rootMargin: '0px 0px -50px 0px'
     };

     const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add('animate-fade-in');
                 observer.unobserve(entry.target);
             }
         });
     }, observerOptions);

     // 观察所有需要动画的元素
     document.querySelectorAll('.project-card, .skill-category, .timeline-item').forEach(el => {
         observer.observe(el);
     });

     /**
      * 响应式处理
      * 处理窗口大小变化时的布局调整
      */
     window.addEventListener('resize', () => {
         // 如果从移动端切换到桌面端，确保菜单状态正确
         if (window.innerWidth > 768 && navLinks) {
             navLinks.classList.add('opacity-0', 'invisible');
             navLinks.classList.remove('opacity-100', 'visible');
             
             const icon = navToggle?.querySelector('i');
             if (icon) {
                 icon.classList.add('fa-bars');
                 icon.classList.remove('fa-times');
             }
         }
     });

     /**
      * 添加页面加载完成后的淡入效果
      */
     document.body.style.opacity = '0';
     document.body.style.transition = 'opacity 0.3s ease-in-out';
     
           window.addEventListener('load', () => {
          document.body.style.opacity = '1';
      });
 });

/**
 * 工具函数：防抖
 * 用于优化频繁触发的事件
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 工具函数：节流
 * 用于控制事件触发频率
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
} 