# 🚀 Sunnoy's Personal Website

欢迎来到我的个人网站项目！这是一个基于 Jekyll 构建的现代化个人博客和作品展示网站。

## 📋 项目概述

这个网站包含以下主要功能：
- 🏠 **个人主页** - 展示个人简介和亮点
- 👤 **关于页面** - 详细的个人介绍、技能和经历
- 🚀 **项目展示** - 展示个人项目和开源贡献
- 📝 **技术博客** - 分享技术文章和学习心得
- 📞 **联系页面** - 联系方式和社交媒体链接

## 🛠️ 技术栈

- **静态网站生成器**: Jekyll 4.3+
- **主题**: Jekyll Minimal (自定义样式)
- **样式**: CSS3 + Sass
- **脚本**: 原生 JavaScript (ES6+)
- **托管**: GitHub Pages
- **评论系统**: Gitalk
- **分析工具**: Google Analytics

## 🎨 特色功能

### 🌟 用户体验
- ✅ 响应式设计，适配各种设备
- ✅ 暗色/亮色主题切换
- ✅ 平滑滚动和动画效果
- ✅ 移动端友好的导航菜单
- ✅ 回到顶部按钮

### 📝 内容管理
- ✅ Markdown 写作支持
- ✅ 代码语法高亮
- ✅ 代码一键复制功能
- ✅ 文章分类和标签系统
- ✅ 相关文章推荐

### 🔧 开发体验
- ✅ 模块化的 CSS 架构
- ✅ 组件化的 HTML 结构
- ✅ 性能优化和监控
- ✅ SEO 友好配置
- ✅ 自动化部署

## 🚀 快速开始

### 环境要求
- Ruby 2.7+
- Jekyll 4.3+
- Git

### 本地开发

1. **克隆项目**
```bash
git clone https://github.com/sunnoy/sunnoy.github.io.git
cd sunnoy.github.io
```

2. **安装依赖**
```bash
bundle install
```

3. **启动开发服务器**
```bash
bundle exec jekyll serve
```

4. **访问网站**
打开浏览器访问 `http://localhost:4000`

### 部署到 GitHub Pages

1. **推送到 GitHub**
```bash
git add .
git commit -m "Update website"
git push origin main
```

2. **启用 GitHub Pages**
- 进入仓库设置
- 找到 Pages 选项
- 选择 `main` 分支作为源
- 网站将自动部署到 `https://yourusername.github.io`

## 📁 项目结构

```
sunnoy.github.io/
├── _config.yml          # Jekyll 配置文件
├── _data/               # 数据文件
│   ├── navigation.yml   # 导航配置
│   └── projects.yml     # 项目数据
├── _includes/           # 可重用组件
│   ├── header.html      # 页头组件
│   └── footer.html      # 页脚组件
├── _layouts/            # 页面布局
│   ├── default.html     # 默认布局
│   ├── post.html        # 文章布局
│   └── page.html        # 页面布局
├── _posts/              # 博客文章
│   ├── 2025-01-01-welcome-post.md
│   ├── 2025-01-15-react-18-features.md
│   └── 2025-02-01-javascript-performance-tips.md
├── assets/              # 静态资源
│   ├── css/
│   │   └── style.css    # 主样式文件
│   ├── js/
│   │   └── main.js      # 主脚本文件
│   └── images/          # 图片资源
├── index.md             # 首页
├── about.md             # 关于页面
├── projects.md          # 项目页面
├── blog.md              # 博客页面
├── contact.md           # 联系页面
├── Gemfile              # Ruby 依赖
└── README.md            # 项目说明
```

## ✏️ 内容管理

### 添加新文章

1. 在 `_posts/` 目录下创建新文件，文件名格式：`YYYY-MM-DD-title.md`

2. 添加 Front Matter：
```yaml
---
layout: post
title: "文章标题"
date: 2025-01-01 10:00:00 +0800
categories: [分类1, 分类2]
tags: [标签1, 标签2, 标签3]
author: "作者名"
excerpt: "文章摘要"
---
```

3. 使用 Markdown 编写文章内容

### 更新项目信息

编辑 `_data/projects.yml` 文件，添加或修改项目信息：

```yaml
featured:
  - title: "项目名称"
    description: "项目描述"
    demo_url: "演示链接"
    github_url: "GitHub 链接"
    tech_stack:
      - "技术1"
      - "技术2"
    status: "状态"
    year: 2025
```

### 自定义配置

编辑 `_config.yml` 文件来修改网站配置：

```yaml
title: "网站标题"
description: "网站描述"
author:
  name: "作者名"
  email: "邮箱"
social:
  github: "GitHub 用户名"
  twitter: "Twitter 用户名"
```

## 🎨 自定义样式

### CSS 变量系统

网站使用 CSS 变量来管理主题色彩：

```css
:root {
  --primary-color: #2563eb;
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  /* 更多变量... */
}
```

### 暗色主题

暗色主题通过 `[data-theme="dark"]` 选择器实现：

```css
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f8fafc;
  /* 暗色主题变量... */
}
```

## 🔧 高级配置

### 评论系统设置

1. 创建 GitHub OAuth App
2. 在 `_config.yml` 中配置 Gitalk：

```yaml
gitalk:
  client_id: "your_client_id"
  client_secret: "your_client_secret"
  repo: "your_repo"
  owner: "your_username"
  admin: "your_username"
```

### Google Analytics

在 `_config.yml` 中添加跟踪 ID：

```yaml
google_analytics: "G-XXXXXXXXXX"
```

## 📊 性能优化

- ✅ CSS 和 JS 文件压缩
- ✅ 图片懒加载
- ✅ 代码分割和按需加载
- ✅ 缓存策略优化
- ✅ CDN 资源使用

## 🐛 常见问题

### 本地开发问题

**Q: Jekyll 服务启动失败**
A: 检查 Ruby 版本和依赖安装：
```bash
ruby --version
bundle install
```

**Q: 样式不生效**
A: 清除 Jekyll 缓存：
```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

### 部署问题

**Q: GitHub Pages 构建失败**
A: 检查 `_config.yml` 配置和文件路径是否正确

**Q: 自定义域名不工作**
A: 确保 DNS 设置正确，并在仓库根目录添加 `CNAME` 文件

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 📧 **邮箱**: [your-email@example.com](mailto:your-email@example.com)
- 🐱 **GitHub**: [@sunnoy](https://github.com/sunnoy)
- 💼 **LinkedIn**: [你的LinkedIn](https://linkedin.com/in/yourprofile)
- 🌐 **网站**: [https://sunnoy.github.io](https://sunnoy.github.io)

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！

**最后更新**: 2025年1月