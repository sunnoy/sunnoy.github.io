---
layout: default
title: 技术博客
---

# 📝 技术博客

欢迎来到我的技术博客！这里分享我在软件开发过程中的学习心得、技术探索和项目经验。

## 📚 文章分类

### 🚀 前端开发
- React 生态系统
- Vue.js 实战技巧
- JavaScript 进阶
- CSS 布局和动画
- 性能优化

### ⚙️ 后端开发
- Node.js 服务端开发
- 数据库设计与优化
- API 设计最佳实践
- 微服务架构
- 服务器运维

### 🛠️ 开发工具
- Git 版本控制
- Docker 容器化
- CI/CD 自动化
- 开发环境配置
- 调试技巧

### 💡 学习笔记
- 算法与数据结构
- 设计模式
- 系统设计
- 技术书籍读后感
- 开源项目分析

---

## 📖 最新文章

{% for post in site.posts %}
<div class="post-item">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p class="post-meta">
    📅 {{ post.date | date: "%Y年%m月%d日" }} 
    {% if post.categories %}
    | 🏷️ 
    {% for category in post.categories %}
      <span class="category">{{ category }}</span>
    {% endfor %}
    {% endif %}
    {% if post.tags %}
    | 🔖 
    {% for tag in post.tags %}
      <span class="tag">{{ tag }}</span>
    {% endfor %}
    {% endif %}
  </p>
  <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
  <a href="{{ post.url }}" class="read-more">阅读全文 →</a>
</div>
<hr>
{% endfor %}

---

## 🔍 文章归档

### 按年份归档
{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
<h4>{{ year.name }}年 ({{ year.items | size }} 篇)</h4>
<ul>
{% for post in year.items %}
  <li>
    <span class="post-date">{{ post.date | date: "%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
{% endfor %}

### 按分类归档
{% assign posts_by_category = site.posts | group_by_exp: "post", "post.categories | first" %}
{% for category in posts_by_category %}
{% if category.name != "" %}
<h4>{{ category.name }} ({{ category.items | size }} 篇)</h4>
<ul>
{% for post in category.items %}
  <li>
    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}

---

## 🏷️ 标签云

{% assign tags = site.tags | sort %}
<div class="tag-cloud">
{% for tag in tags %}
  <a href="#{{ tag[0] }}" class="tag-link" style="font-size: {{ tag[1].size | times: 0.8 | plus: 1 }}em;">
    {{ tag[0] }} ({{ tag[1].size }})
  </a>
{% endfor %}
</div>

---

## 📊 博客统计

- 📝 **总文章数**: {{ site.posts | size }} 篇
- 📅 **最近更新**: {{ site.posts.first.date | date: "%Y年%m月%d日" }}
- 🏷️ **分类数量**: {{ site.categories | size }} 个
- 🔖 **标签数量**: {{ site.tags | size }} 个

---

## 💬 互动交流

### 评论和反馈
每篇文章都支持评论功能，欢迎大家：
- 💭 分享你的观点和经验
- 🤔 提出问题和疑惑
- 💡 建议改进和优化
- 🔗 分享相关资源

### 订阅更新
- 📧 **邮件订阅**: [订阅链接](mailto:subscribe@example.com?subject=博客订阅)
- 📱 **RSS 订阅**: [RSS Feed]({{ site.url }}/feed.xml)
- 🐱 **GitHub 关注**: [{{ site.github.owner_name }}]({{ site.github.owner_url }})

### 社交媒体
- 🐦 **Twitter**: [@yourusername](https://twitter.com/yourusername)
- 💼 **LinkedIn**: [你的LinkedIn](https://linkedin.com/in/yourprofile)
- 📺 **YouTube**: [技术分享频道](https://youtube.com/c/yourchannel)

---

## 📝 写作计划

### 即将发布
- 🔄 "React 18 新特性深度解析"
- 🚀 "Node.js 性能优化实战"
- 🎨 "CSS Grid 布局完全指南"
- 🔧 "Docker 容器化最佳实践"

### 系列文章
- 📚 **JavaScript 进阶系列** (进行中)
- 🏗️ **系统设计系列** (计划中)
- 🔍 **算法解题系列** (计划中)

---

*"分享知识，共同成长"*

有任何建议或想法，欢迎通过 [邮件](mailto:your-email@example.com) 或 [GitHub Issues]({{ site.github.repository_url }}/issues) 联系我！