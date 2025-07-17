// 添加星星动画效果
function createStars() {
  const header = document.querySelector('header');
  if (!header) return;
  
  const headerRect = header.getBoundingClientRect();
  const starsCount = 15;
  
  for (let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.className = 'magic-star';
    
    // 随机位置
    const x = Math.random() * headerRect.width;
    const y = Math.random() * headerRect.height;
    
    // 随机延迟
    const delay = Math.random() * 3;
    const duration = 2 + Math.random() * 3;
    
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;
    
    header.appendChild(star);
  }
}

// 添加页面过渡效果
function addPageTransitions() {
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // 仅针对站内链接
      if (this.hostname === window.location.hostname) {
        e.preventDefault();
        
        const destination = this.href;
        
        // 页面淡出效果
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        // 延迟后导航到目标页面
        setTimeout(() => {
          window.location.href = destination;
        }, 500);
      }
    });
  });
  
  // 页面加载时淡入
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
  });
}

// 添加悬停效果
function addHoverEffects() {
  const cards = document.querySelectorAll('.garden-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const cardRect = this.getBoundingClientRect();
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;
      
      // 计算旋转角度
      const centerX = cardRect.width / 2;
      const centerY = cardRect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      // 应用3D效果
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// 添加背景粒子效果
function createParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-container';
  particleContainer.style.position = 'fixed';
  particleContainer.style.top = '0';
  particleContainer.style.left = '0';
  particleContainer.style.width = '100%';
  particleContainer.style.height = '100%';
  particleContainer.style.pointerEvents = 'none';
  particleContainer.style.zIndex = '-1';
  document.body.appendChild(particleContainer);
  
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    
    // 随机大小和位置
    const size = Math.random() * 5 + 2;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    // 样式设置
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = 'rgba(255, 215, 0, 0.3)';
    particle.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
    
    // 动画
    const duration = 15 + Math.random() * 20;
    const delay = Math.random() * 5;
    
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    
    particleContainer.appendChild(particle);
  }
  
  // 添加漂浮动画
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(20px) translateX(-15px); }
      75% { transform: translateY(-10px) translateX(-10px); }
    }
  `;
  document.head.appendChild(style);
}

// 初始化所有效果
function initEffects() {
  // 添加CSS类到body
  document.body.classList.add('garden-bg-gradient');
  
  // 延迟加载效果
  setTimeout(() => {
    createStars();
    addPageTransitions();
    addHoverEffects();
    createParticles();
  }, 500);
}

// 当DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', initEffects); 