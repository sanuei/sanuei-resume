/**
 * 导航栏和菜单交互功能
 * 包含移动端菜单切换、点击处理和滚动效果
 */
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    /**
     * 切换菜单显示状态
     * 点击汉堡按钮时触发
     */
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        navLinks.classList.toggle('active'); // 切换菜单显示状态
        
        // 切换汉堡按钮图标
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    /**
     * 点击导航链接时关闭菜单
     * 仅在移动端视图下生效
     */
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                // 恢复汉堡按钮图标
                const icon = navToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
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
            navLinks.classList.contains('active')) {
            // 关闭菜单
            navLinks.classList.remove('active');
            // 恢复汉堡按钮图标
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });

    /**
     * 页面滚动效果
     * 添加导航栏阴影
     */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            // 滚动时添加阴影
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            // 回到顶部时移除阴影
            navbar.style.boxShadow = 'none';
        }
    });
}); 