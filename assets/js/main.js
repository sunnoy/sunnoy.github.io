// ===== 主题切换功能 =====
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (this.themeToggle) {
            const icon = this.themeToggle.querySelector('.theme-icon');
            if (icon) {
                icon.textContent = theme === 'dark' ? '☀️' : '🌙';
            }
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    bindEvents() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// ===== 移动端导航菜单 =====
class MobileNavigation {
    constructor() {
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.isOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.navMenu.classList.toggle('active', this.isOpen);
        this.navToggle.classList.toggle('active', this.isOpen);
        
        // 防止背景滚动
        document.body.style.overflow = this.isOpen ? 'hidden' : '';
    }

    closeMenu() {
        this.isOpen = false;
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    bindEvents() {
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMenu());
        }

        // 点击菜单项时关闭菜单
        if (this.navMenu) {
            this.navMenu.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link')) {
                    this.closeMenu();
                }
            });
        }

        // 点击外部区域关闭菜单
        document.addEventListener('click', (e) => {
            if (this.isOpen && 
                !this.navMenu.contains(e.target) && 
                !this.navToggle.contains(e.target)) {
                this.closeMenu();
            }
        });

        // 窗口大小改变时关闭菜单
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isOpen) {
                this.closeMenu();
            }
        });
    }
}

// ===== 回到顶部按钮 =====
class BackToTop {
    constructor() {
        this.button = document.getElementById('back-to-top');
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateVisibility();
    }

    updateVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isVisible = scrollTop > 300;
        
        if (this.button) {
            this.button.classList.toggle('visible', isVisible);
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    bindEvents() {
        if (this.button) {
            this.button.addEventListener('click', () => this.scrollToTop());
        }

        window.addEventListener('scroll', () => this.updateVisibility());
    }
}

// ===== 代码复制功能 =====
class CodeCopyManager {
    constructor() {
        this.init();
    }

    init() {
        this.addCopyButtons();
    }

    addCopyButtons() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach((codeBlock) => {
            const pre = codeBlock.parentElement;
            if (pre.querySelector('.copy-button')) return; // 避免重复添加

            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.innerHTML = '📋 复制';
            copyButton.setAttribute('title', '复制代码');

            copyButton.addEventListener('click', () => {
                this.copyCode(codeBlock, copyButton);
            });

            pre.style.position = 'relative';
            pre.appendChild(copyButton);
        });
    }

    async copyCode(codeBlock, button) {
        const code = codeBlock.textContent;
        
        try {
            await navigator.clipboard.writeText(code);
            button.innerHTML = '✅ 已复制';
            button.style.background = '#10b981';
            
            setTimeout(() => {
                button.innerHTML = '📋 复制';
                button.style.background = '';
            }, 2000);
        } catch (err) {
            console.error('复制失败:', err);
            button.innerHTML = '❌ 失败';
            
            setTimeout(() => {
                button.innerHTML = '📋 复制';
            }, 2000);
        }
    }
}

// ===== 图片懒加载 =====
class LazyImageLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                    }
                });
            });

            this.images.forEach(img => this.observer.observe(img));
        } else {
            // 降级处理
            this.images.forEach(img => this.loadImage(img));
        }
    }

    loadImage(img) {
        img.src = img.dataset.src;
        img.classList.add('fade-in');
        img.removeAttribute('data-src');
        
        if (this.observer) {
            this.observer.unobserve(img);
        }
    }
}

// ===== 阅读进度条 =====
class ReadingProgress {
    constructor() {
        this.progressBar = this.createProgressBar();
        this.init();
    }

    createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .reading-progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background-color: var(--border-color);
                z-index: 1000;
            }
            .reading-progress-fill {
                height: 100%;
                background-color: var(--primary-color);
                width: 0%;
                transition: width 0.1s ease;
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(progressBar);
        
        return progressBar;
    }

    init() {
        // 只在文章页面显示进度条
        if (document.querySelector('.post-content')) {
            this.bindEvents();
        } else {
            this.progressBar.style.display = 'none';
        }
    }

    updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        
        const fill = this.progressBar.querySelector('.reading-progress-fill');
        fill.style.width = Math.min(progress, 100) + '%';
    }

    bindEvents() {
        window.addEventListener('scroll', () => this.updateProgress());
        window.addEventListener('resize', () => this.updateProgress());
    }
}

// ===== 搜索功能 =====
class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');
        this.posts = [];
        this.init();
    }

    async init() {
        if (this.searchInput) {
            await this.loadPosts();
            this.bindEvents();
        }
    }

    async loadPosts() {
        try {
            // 这里应该加载所有文章的数据
            // 在实际项目中，可以通过 Jekyll 生成一个 JSON 文件
            const response = await fetch('/search.json');
            this.posts = await response.json();
        } catch (error) {
            console.error('加载文章数据失败:', error);
        }
    }

    search(query) {
        if (!query.trim()) {
            this.clearResults();
            return;
        }

        const results = this.posts.filter(post => 
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.content.toLowerCase().includes(query.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );

        this.displayResults(results);
    }

    displayResults(results) {
        if (!this.searchResults) return;

        if (results.length === 0) {
            this.searchResults.innerHTML = '<p>没有找到相关文章</p>';
            return;
        }

        const html = results.map(post => `
            <div class="search-result">
                <h3><a href="${post.url}">${post.title}</a></h3>
                <p>${post.excerpt}</p>
                <div class="search-meta">
                    <time>${post.date}</time>
                    <div class="search-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        this.searchResults.innerHTML = html;
    }

    clearResults() {
        if (this.searchResults) {
            this.searchResults.innerHTML = '';
        }
    }

    bindEvents() {
        let debounceTimer;
        
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                this.search(e.target.value);
            }, 300);
        });
    }
}

// ===== 性能监控 =====
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => this.logPerformanceMetrics(), 0);
            });
        }
    }

    logPerformanceMetrics() {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        console.group('🚀 页面性能指标');
        console.log('📊 页面加载时间:', Math.round(navigation.loadEventEnd - navigation.fetchStart), 'ms');
        console.log('🏗️ DOM 解析时间:', Math.round(navigation.domContentLoadedEventEnd - navigation.domLoading), 'ms');
        
        paint.forEach(entry => {
            console.log(`🎨 ${entry.name}:`, Math.round(entry.startTime), 'ms');
        });
        
        console.groupEnd();
    }
}

// ===== 访问统计 =====
class VisitorCounter {
    constructor() {
        this.storageKey = 'visitor-count';
        this.init();
    }

    init() {
        this.updateCount();
        this.displayCount();
    }

    updateCount() {
        let count = parseInt(localStorage.getItem(this.storageKey) || '0');
        count++;
        localStorage.setItem(this.storageKey, count.toString());
        return count;
    }

    displayCount() {
        const countElement = document.getElementById('visitor-count');
        if (countElement) {
            const count = localStorage.getItem(this.storageKey) || '0';
            countElement.textContent = `👀 访问次数: ${count}`;
        }
    }
}

// ===== 初始化所有功能 =====
document.addEventListener('DOMContentLoaded', () => {
    // 初始化各个功能模块
    new ThemeManager();
    new MobileNavigation();
    new BackToTop();
    new CodeCopyManager();
    new LazyImageLoader();
    new ReadingProgress();
    new SearchManager();
    new PerformanceMonitor();
    new VisitorCounter();

    // 添加页面加载动画
    document.body.classList.add('fade-in');

    // 外部链接在新窗口打开
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });

    // 平滑滚动到锚点
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
});

// ===== 全局工具函数 =====
window.utils = {
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 节流函数
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // 格式化日期
    formatDate(date) {
        return new Intl.DateTimeFormat('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },

    // 复制到剪贴板
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('复制失败:', err);
            return false;
        }
    }
};