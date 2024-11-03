document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // 切换菜单显示状态
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        // 切换图标
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // 点击链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !navbar.contains(e.target) && 
            navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });

    // 滚动时添加阴影效果
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}); 