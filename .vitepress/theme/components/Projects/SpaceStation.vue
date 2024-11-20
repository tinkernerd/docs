<template>
  <div class="project-example">
    <div class="gallery-example">
      <h1>Gallery Example</h1>
      <div id="gallery">
        <figure v-for="(caption, index) in captions" :key="index">
          <img :src="`/js/assets/images/space-station/slide${index}.jpg`" alt="" />
          <figcaption>{{ caption }}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Array of captions for the gallery
const captions = ref([
  "International Space Station fourth expansion [2009]",
  "Assembling the International Space Station [1998]",
  "The Atlantis docks with the ISS [2001]",
  "The Atlantis approaches the ISS [2000]",
  "The Atlantis approaches the ISS [2000]",
  "International Space Station over Earth [2002]",
  "The International Space Station first expansion [2002]",
  "Hurricane Ivan from the ISS [2008]",
  "The Soyuz spacecraft approaches the ISS [2005]",
  "The International Space Station from above [2006]",
  "Maneuvering in space with the Canadarm2 [2006]",
  "The International Space Station second expansion [2006]",
  "The International Space Station third expansion [2007]",
  "The ISS over the Ionian Sea [2007]",
]);
</script>

<style scoped>
/* Gallery Example Styles */
.gallery-example {
  max-width: 800px;
  padding: 20px;
  margin: 20px auto;
  background-color: rgba(249, 249, 249, 0.664);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gallery-example h1 {
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

#gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}

#gallery figure {
  width: 150px;
  text-align: center;
}

#gallery img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

#gallery figcaption {
  background-color: black;
  margin-top: 0.5rem;
  font-size: 0.85em;
  color: white;
}
</style>