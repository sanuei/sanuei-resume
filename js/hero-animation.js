class HeroAnimation {
    constructor() {
        this.canvas = document.getElementById('heroCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = 40;
        this.points = [];
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.initGrid();
        this.animate();
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.initGrid();
    }

    initGrid() {
        this.points = [];
        
        // 计算网格的起始位置，使其居中
        const startX = (this.canvas.width % this.gridSize) / 2;
        const startY = (this.canvas.height % this.gridSize) / 2;
        
        // 创建网格点
        for (let x = startX; x < this.canvas.width; x += this.gridSize) {
            for (let y = startY; y < this.canvas.height; y += this.gridSize) {
                // 确保点不会太靠近边缘
                if (x >= this.gridSize && x <= this.canvas.width - this.gridSize &&
                    y >= this.gridSize && y <= this.canvas.height - this.gridSize) {
                    this.points.push({
                        x: x,
                        y: y,
                        originalX: x,
                        originalY: y,
                        phase: Math.random() * Math.PI * 2
                    });
                }
            }
        }
    }

    draw() {
        // 清除画布
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const time = Date.now() * 0.001;

        this.points.forEach(point => {
            // 添加轻微的动态效果
            const offsetX = Math.sin(time + point.phase) * 2;
            const offsetY = Math.cos(time + point.phase) * 2;
            point.x = point.originalX + offsetX;
            point.y = point.originalY + offsetY;

            // 绘制点
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            this.ctx.fillRect(point.x - 1.5, point.y - 1.5, 3, 3);

            // 绘制连接线
            this.ctx.beginPath();
            this.ctx.moveTo(point.x, point.y);
            this.ctx.lineTo(centerX, centerY);
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            this.ctx.stroke();
        });

        // 绘制中心点
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        this.ctx.fillRect(centerX - 1.5, centerY - 1.5, 3, 3);
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// 页面加载完成后初始化动画
document.addEventListener('DOMContentLoaded', () => {
    new HeroAnimation();
}); 