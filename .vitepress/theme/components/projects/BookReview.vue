<template>
  <div class="project-example">
    <textarea
      id="comment"
      v-model="comment"
      @input="updateCount"
      rows="5"
      cols="40"
      placeholder="Describe the legend of your quest..."
    ></textarea>

    <div id="countLabel">
      Character Count: <span id="countValue">{{ charCount }}</span> / <span id="limit">{{ MAX_REVIEW }}</span>
    </div>

    <div id="warningBox" v-if="charCount > MAX_REVIEW">
      Your review exceeds the maximum length.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Maximum Length of Review
const MAX_REVIEW = 100;

// Reactive data
const comment = ref("");

// Computed property to calculate character count
const charCount = computed(() => {
  const commentregx = /\s/g;
  return comment.value.replace(commentregx, "").length;
});

// Method to update the count (this is optional since `charCount` is reactive)
function updateCount() {
  // The computed property `charCount` will automatically update
}
</script>

<style scoped>
.project-example {
  max-width: 400px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
}

textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
}

#countLabel {
  margin-top: 10px;
  font-size: 14px;
}

#warningBox {
  margin-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
