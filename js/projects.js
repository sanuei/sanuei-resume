/**
 * 项目展示页面的交互功能
 * 实现项目过滤和动画效果
 */
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有过滤按钮和项目卡片
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    /**
     * 为每个过滤按钮添加点击事件
     * 实现项目分类过滤功能
     */
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的active类
            button.classList.add('active');

            // 获取过滤类别
            const filter = button.getAttribute('data-filter');

            // 过滤项目卡片
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    // 显示匹配的项目
                    card.style.display = 'block';
                    // 添加淡入动画
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    // 隐藏不匹配的项目
                    card.style.display = 'none';
                }
            });
        });
    });

    /**
     * 初始化项目卡片动画
     * 页面加载时的淡入效果
     */
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 100);
    });
}); 