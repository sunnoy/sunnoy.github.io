# 图片资源目录

这个目录用于存放网站的图片资源。

## 目录结构

```
assets/images/
├── avatar.jpg           # 个人头像
├── favicon.ico          # 网站图标
├── og-image.jpg         # 社交媒体分享图片
└── projects/            # 项目截图
    ├── project-manager.jpg
    ├── weather-app.jpg
    └── blog-system.jpg
```

## 图片规范

### 头像 (avatar.jpg)
- 尺寸: 400x400px
- 格式: JPG/PNG
- 大小: < 100KB

### 项目截图
- 尺寸: 1200x800px (3:2 比例)
- 格式: JPG/PNG
- 大小: < 500KB

### 网站图标 (favicon.ico)
- 尺寸: 32x32px, 16x16px
- 格式: ICO
- 包含多个尺寸

### 社交分享图片 (og-image.jpg)
- 尺寸: 1200x630px
- 格式: JPG/PNG
- 大小: < 300KB

## 优化建议

1. **压缩图片**: 使用 TinyPNG 或类似工具压缩图片
2. **响应式图片**: 为不同设备提供不同尺寸的图片
3. **懒加载**: 使用 `loading="lazy"` 属性
4. **WebP 格式**: 考虑使用 WebP 格式以获得更好的压缩率

## 使用方法

在 Markdown 文件中引用图片：

```markdown
![描述文字]({{ '/assets/images/filename.jpg' | relative_url }})
```

在 HTML 中引用图片：

```html
<img src="{{ '/assets/images/filename.jpg' | relative_url }}" alt="描述文字">