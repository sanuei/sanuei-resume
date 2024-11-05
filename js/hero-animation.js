class HeroAnimation {
    constructor() {
        this.canvas = document.getElementById('heroCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.circles = [];
        this.colors = [
            '#FF3366', // 亮粉红
            '#33FF66', // 亮绿
            '#6633FF', // 亮紫
            '#FFFF33', // 亮黄
            '#FF6633', // 亮橙
            '#33FFFF'  // 亮青
        ];
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.initCircles();
        this.animate();
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.initCircles();
    }

    initCircles() {
        this.circles = [];
        const numCircles = 15; // 圆形数量
        
        for (let i = 0; i < numCircles; i++) {
            const size = Math.random() * 100 + 50; // 50-150px的随机大小
            this.circles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: size,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
                rotation: 0,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                pattern: Math.floor(Math.random() * 3) // 0: 圆形, 1: 同心圆, 2: 点阵
            });
        }
    }

    drawPattern(circle) {
        const { x, y, radius, color, rotation, pattern } = circle;
        
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(rotation);
        
        switch(pattern) {
            case 0: // 实心圆带边框
                this.ctx.beginPath();
                this.ctx.arc(0, 0, radius, 0, Math.PI * 2);
                this.ctx.fillStyle = color;
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 4;
                this.ctx.stroke();
                break;
                
            case 1: // 同心圆
                for (let i = radius; i > 0; i -= 20) {
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, i, 0, Math.PI * 2);
                    this.ctx.strokeStyle = i % 40 === 0 ? color : '#000000';
                    this.ctx.lineWidth = 4;
                    this.ctx.stroke();
                }
                break;
                
            case 2: // 点阵图案
                const dotSize = 8;
                const spacing = 20;
                for (let dx = -radius; dx < radius; dx += spacing) {
                    for (let dy = -radius; dy < radius; dy += spacing) {
                        if (dx * dx + dy * dy <= radius * radius) {
                            this.ctx.beginPath();
                            this.ctx.arc(dx, dy, dotSize, 0, Math.PI * 2);
                            this.ctx.fillStyle = color;
                            this.ctx.fill();
                        }
                    }
                }
                break;
        }
        
        this.ctx.restore();
    }

    animate() {
        // 创建半透明黑色背景，产生轨迹效果
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // 更新和绘制所有图案
        this.circles.forEach(circle => {
            // 更新位置
            circle.x += circle.speedX;
            circle.y += circle.speedY;
            circle.rotation += circle.rotationSpeed;

            // 边界检查
            if (circle.x < -circle.radius) circle.x = this.canvas.width + circle.radius;
            if (circle.x > this.canvas.width + circle.radius) circle.x = -circle.radius;
            if (circle.y < -circle.radius) circle.y = this.canvas.height + circle.radius;
            if (circle.y > this.canvas.height + circle.radius) circle.y = -circle.radius;

            // 绘制图案
            this.drawPattern(circle);
        });

        requestAnimationFrame(() => this.animate());
    }
}

// 页面加载完成后初始化动画
document.addEventListener('DOMContentLoaded', () => {
    new HeroAnimation();
}); 