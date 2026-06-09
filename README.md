# AI升级地图

一个帮助零基础普通人系统学习 AI 的静态网站。用户选择目标、基础和可投入时间后，网站会给出当前等级、学习路线、课程任务、Codex 安装排查、工具百科和变现路径。

## 本地运行

```bash
node server.js
```

打开：

```text
http://127.0.0.1:4173
```

## 当前模块

- AI 学习目标诊断器
- Lv0 到 Lv7 升级打怪路线
- 按目标筛选的课程任务
- 主流 AI 工具百科
- Codex 安装与首次交付急救站
- AI 变现路线
- 小白常见卡点 FAQ

## 部署

这是纯静态网站，可以部署到 Netlify、Vercel、GitHub Pages 或 Cloudflare Pages。项目已经包含 `netlify.toml` 和 `vercel.json`。

### 临时公网分享

本机已经带有 `cloudflared.exe` 时，可以运行：

```bash
start_public_ai_map.cmd
```

命令窗口会输出一个 `https://*.trycloudflare.com` 链接。保持窗口打开，别人就可以通过这个链接访问网站。这个链接适合评论区临时分享，但不是长期稳定域名。

### 稳定部署目录

`dist/` 目录只包含上线需要的静态文件：

- `index.html`
- `styles.css`
- `script.js`
- `assets/ai-learning-map.png`
- `netlify.toml`
- `vercel.json`

部署到 Netlify 或 Vercel 时，优先上传或发布 `dist/`，不要发布整个工作区。
