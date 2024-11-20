import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const docsDir = path.resolve('docs'); // Location of your Markdown files
const sitemapFile = path.resolve('docs/sitemap.md'); // Output Markdown sitemap file

// Helper function to get folder metadata
function getFolderMeta(dir) {
  const metaFile = path.join(dir, 'meta.yml');
  if (fs.existsSync(metaFile)) {
    const content = fs.readFileSync(metaFile, 'utf-8');
    const meta = yaml.load(content);
    return {
      title: meta.title || path.basename(dir),
      description: meta.description || '',
      cat: meta.cat || null, // Optional category
    };
  }
  return null; // No metadata
}

// Generate Markdown for files
function generateFileMarkdown(files) {
  return files
    .map(({ title, description, link }) => `- [${title}](${link}) - ${description}`)
    .join('\n');
}

// Recursive function to build the sitemap
function buildSitemap(dir) {
  const files = fs.readdirSync(dir);
  const categories = {}; // Group files/folders by category
  const uncategorizedFiles = []; // Files without categories or topics

  for (const file of files) {
    const fullPath = path.join(dir, file);

    // Exclude 'public' and 'assets' folders
    if (file === 'public' || file === 'assets') {
      continue;
    }

    if (fs.statSync(fullPath).isDirectory()) {
      const folderMeta = getFolderMeta(fullPath);
      const subSitemap = buildSitemap(fullPath);

      if (folderMeta && folderMeta.cat) {
        categories[folderMeta.cat] = categories[folderMeta.cat] || [];
        categories[folderMeta.cat].push({ ...folderMeta, subSitemap });
      } else if (folderMeta || subSitemap.uncategorizedFiles.length > 0) {
        uncategorizedFiles.push({ ...folderMeta, subSitemap });
      }
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const { data: frontmatter } = matter(content);

      const title = frontmatter.title || file.replace('.md', '');
      const description = frontmatter.description || 'No description provided.';
      const link = fullPath.replace(docsDir, '').replace(/\\/g, '/').replace('.md', '');
      const cat = frontmatter.cat || null;

      if (cat) {
        categories[cat] = categories[cat] || [];
        categories[cat].push({ title, description, link });
      } else {
        uncategorizedFiles.push({ title, description, link });
      }
    }
  }

  return { categories, uncategorizedFiles };
}

// Generate Markdown content from the structured sitemap
function generateMarkdown({ categories, uncategorizedFiles }) {
  let markdown = '';

  // Add uncategorized files
  if (uncategorizedFiles.length > 0) {
    markdown += generateFileMarkdown(uncategorizedFiles) + '\n';
  }

  // Add categorized files/folders
  for (const [cat, items] of Object.entries(categories).sort()) {
    if (items.length === 1) {
      // Skip category heading if only one topic
      const { title, description, subSitemap } = items[0];
      markdown += `## ${title}\n\n${description}\n\n`;
      markdown += generateMarkdown(subSitemap || {});
    } else {
      markdown += `## ${cat}\n\n`;
      items.forEach(({ title, description, subSitemap }) => {
        if (subSitemap) {
          markdown += `### ${title}\n\n${description}\n\n`;
          markdown += generateMarkdown(subSitemap);
        } else {
          markdown += `- [${title}](${title}) - ${description}\n`;
        }
      });
      markdown += '\n';
    }
  }

  return markdown;
}

// Build the sitemap data structure
const sitemapData = buildSitemap(docsDir);

// Generate the Markdown sitemap
const sitemapMarkdown = `---
title: Sitemap
outline: deep
description: A sitemap of all the Markdown files in the project, organized by categories and subfolders.
---

# Sitemap

## Main Site Markdown Files

Markdown files for the main site level.
${generateMarkdown(sitemapData)}`;

// Write to the output Markdown file
fs.writeFileSync(sitemapFile, sitemapMarkdown);
console.log(`Sitemap Markdown generated at: ${sitemapFile}`);
