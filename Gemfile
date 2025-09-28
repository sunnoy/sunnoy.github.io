source "https://rubygems.org"

# Jekyll 版本
gem "jekyll", "~> 4.3.0"

# 默认主题
gem "jekyll-theme-minimal", "~> 0.2.0"

# Jekyll 插件
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate"
  gem "jekyll-archives"
  gem "jekyll-redirect-from"
end

# Windows 和 JRuby 不包含 zoneinfo 文件，需要 tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Windows 性能优化
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# JRuby 的 HTTP 解析器
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# GitHub Pages 兼容性
gem "github-pages", group: :jekyll_plugins