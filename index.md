---
layout: default
title: 欢迎来到我的个人网站
---

# 👋 欢迎来到我的个人网站

## 关于我

你好！我是一名热爱技术的开发者，专注于创建有意义的项目和分享技术知识。

### 🚀 我的专长

- **前端开发**: React, Vue.js, JavaScript, HTML/CSS
- **后端开发**: Node.js, Python, Java
- **数据库**: MySQL, MongoDB, PostgreSQL
- **工具**: Git, Docker, AWS, Linux

### 📈 最新动态

- 🔥 正在学习 AI/ML 相关技术
- 💻 开发中的项目：个人博客系统
- 📚 最近在读：《Clean Code》

## 🎯 精选项目

### [项目管理系统](./projects.html#project-manager)
一个基于 React 和 Node.js 的全栈项目管理应用，支持团队协作和任务跟踪。

### [天气预报应用](./projects.html#weather-app)
使用 Vue.js 开发的响应式天气应用，集成了多个天气 API。

### [个人博客](./blog.html)
基于 Jekyll 的技术博客，分享编程心得和学习笔记。

## 📝 最新博客

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y年%m月%d日" }}
{% endfor %}

## 📞 联系我

- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 💼 LinkedIn: [你的LinkedIn](https://linkedin.com/in/yourprofile)
- 🐱 GitHub: [{{ site.github.owner_name }}]({{ site.github.owner_url }})
- 📱 微信: your-wechat-id

---

*"代码改变世界，创新驱动未来"*

[了解更多关于我](./about.html) | [查看我的项目](./projects.html) | [阅读我的博客](./blog.html)