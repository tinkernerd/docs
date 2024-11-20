<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData();

const title = frontmatter.value.title || "No title provided";
const source = frontmatter.value.source || "No source provided";
const authors = frontmatter.value.author || "Unknown author";

const authorsList = authors.split(",").map((author) => author.trim());
const truncatedTitle = title.split(" ").slice(0, 4).join(" ") + (title.split(" ").length > 4 ? "..." : "");
const authorsText = authorsList.length > 1
  ? `${authorsList.slice(0, -1).join(", ")}, and ${authorsList.slice(-1)}`
  : authorsList[0];
</script>

<template>
  <div class="callout">
    <p>
      Feel free to check out
      <a :href="source" target="_blank" rel="noopener">{{ truncatedTitle }}</a>,
      by {{ authorsText }}.
    </p>
  </div>
</template>