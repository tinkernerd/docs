<script>
import sitemapData from './sitemap-data.json'; // Generated metadata for your Markdown files

export default {
  name: "Sitemap",
  data() {
    return {
      sitemap: sitemapData,
    };
  },
};
</script>

<template>
  <div class="sitemap">
    <h1>Sitemap</h1>
    <div v-for="(files, folder) in sitemap" :key="folder" class="folder-section">
      <h2>{{ folder }}</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="file in files" :key="file.link">
            <td><a :href="file.link">{{ file.title }}</a></td>
            <td>{{ file.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.sitemap {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.folder-section {
  margin-bottom: 40px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
