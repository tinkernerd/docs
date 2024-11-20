import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Adjust the paths to your docs and output directories
const docsDir = path.resolve('docs');
const sitemapDir = path.resolve('.vitepress/theme/components/Sitemap');
const sitemapFile = path.join(sitemapDir, 'sitemap-data.json');

// Ensure the Sitemap directory exists
if (!fs.existsSync(sitemapDir)) {
  fs.mkdirSync(sitemapDir, { recursive: true });
}

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  const data = {};

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      data[file] = scanDirectory(fullPath);
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const { data: frontmatter } = matter(content);

      const folderName = path.basename(dir);
      data[folderName] = data[folderName] || [];
      data[folderName].push({
        title: frontmatter.title || file.replace('.md', ''),
        description: frontmatter.description || 'No description provided.',
        link: fullPath.replace(docsDir, '').replace(/\\/g, '/').replace('.md', ''),
      });
    }
  }

  return data;
}

const sitemap = scanDirectory(docsDir);
fs.writeFileSync(sitemapFile, JSON.stringify(sitemap, null, 2));
console.log(`Sitemap data generated at: ${sitemapFile}`);
