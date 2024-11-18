<template>
  <div v-if="noteBlock" class="callout" v-html="noteBlock"></div>
</template>

<script>
export default {
  computed: {
    frontmatter() {
      // Assumes the page provides frontmatter via $frontmatter (e.g., in VuePress/VitePress)
      return this.$frontmatter || {};
    },
    title() {
      return this.frontmatter.title || "No title provided";
    },
    source() {
      return this.frontmatter.source || "No source provided";
    },
    authors() {
      return this.frontmatter.author || "Unknown author";
    },
    authorsList() {
      return this.authors.split(",").map((author) => author.trim());
    },
    truncatedTitle() {
      const words = this.title.split(" ");
      return words.length > 4 ? `${words.slice(0, 4).join(" ")}...` : this.title;
    },
    authorsText() {
      if (this.authorsList.length === 1) {
        return this.authorsList[0];
      }
      const lastAuthor = this.authorsList.pop();
      return `${this.authorsList.join(", ")}, and ${lastAuthor}`;
    },
    noteBlock() {
      return `
        <strong>Hey, this isn't my work.</strong>
        Feel free to check out 
        <a href="${this.source}" target="_blank">${this.truncatedTitle}</a>, 
        by ${this.authorsText}.
      `;
    },
  },
};
</script>

<style>
.callout {
  padding: 1rem;
  /*border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;*/
}
.callout strong {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
</style>
