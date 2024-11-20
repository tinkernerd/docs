---
title: "Introduction to GitHub Pages"
dateCreated: 2024-11-20T14:45:00
type: Guide
tags: [GitHub Pages, Hosting, Documentation]
outline: deep
---

# **Introduction to GitHub Pages**

GitHub Pages is a free and powerful feature provided by GitHub for hosting static websites directly from your repository. It's perfect for personal projects, documentation, portfolios, and more.

---

## **📌 Key Features**
1. **Free Hosting**: No cost to deploy your static websites.
2. **Custom Domains**: Supports custom domain names for professional branding.
3. **Built-in Jekyll Support**: Automatically process Jekyll sites for dynamic page generation.
4. **Integration with Git**: Seamless deployment from GitHub repositories.

---

## **🚀 Getting Started**

### **1. Enable GitHub Pages**
1. Navigate to your repository on GitHub.
2. Go to **Settings** > **Pages**.
3. Select a branch (e.g., `main`) and a folder (e.g., `/root` or `/docs`).
4. Save your settings. Your site will be live at `https://<username>.github.io/<repository>`.

### **2. Create Content**
- Add an `index.html` or `index.md` file to the root or `/docs` folder of your repository.
- Push your changes to GitHub.

Example: Create a simple `index.html` file.
```html
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to My GitHub Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first GitHub Pages site.</p>
</body>
</html>
```

### **3. Use Jekyll for Dynamic Sites**
To use Jekyll:
- Add a `_config.yml` file to configure your site.
- Create layouts and content using Markdown and Liquid templating.

---

## **⚙️ Configuration**

### **Basic `_config.yml` Example**
```yaml
title: My GitHub Pages Site
theme: minima
url: https://<username>.github.io/<repository>
```

### **Themes**
GitHub Pages supports multiple themes via [Jekyll Themes](https://pages.github.com/themes/). Set a theme in `_config.yml`:
```yaml
theme: jekyll-theme-cayman
```

### **Custom Domains**
1. Register a domain name with a provider.
2. Add a `CNAME` file to your repository with your custom domain:
   ```
   www.mywebsite.com
   ```
3. Update DNS settings at your domain registrar to point to GitHub's servers.

---

## **🔄 Deployment Workflow**
1. Edit your site locally or directly in the GitHub interface.
2. Commit and push changes to your repository.
3. GitHub Pages automatically updates your live site.

---

## **📂 Directory Structure**
Here's a common file layout for a GitHub Pages project:

```
/
├── _config.yml   # Site configuration
├── index.md      # Home page content
├── about.md      # About page
├── _posts/       # Blog posts (if using Jekyll)
└── assets/       # CSS, JavaScript, and images
```

---

## **💡 Tips & Best Practices**
1. **Keep It Simple**: GitHub Pages works best with static content.
2. **Secure Your Site**: Use HTTPS to ensure secure connections.
3. **Regular Backups**: Keep local copies of your site files.
4. **Optimize Assets**: Compress images and minify CSS/JS for faster load times.

---

## **🔗 Resources**
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/)
- [Custom Domains Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

🎉 *GitHub Pages makes it easy to share your projects with the world. Start hosting your site today!*
