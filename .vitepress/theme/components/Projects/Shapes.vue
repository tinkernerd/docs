<template>
  <div class="project-example">
    <div class="shape-interaction">
      <header>
        <h1>Maximum Effort, Minimal Shapes</h1>
      </header>

      <article>
        <h2>Pick a Shape</h2>
        <div
          v-for="shape in shapes"
          :key="shape.id"
          :class="['shape', shape.class]"
          @mouseover="setFeedback(shape.name)"
          @mouseout="clearFeedback"
        ></div>
      </article>
      <p id="feedback">{{ feedback }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Reactive feedback message
const feedback = ref("");

// Shapes data
const shapes = [
  { id: "square", name: "square", class: "square" },
  { id: "triangle", name: "triangle", class: "triangle" },
  { id: "circle", name: "circle", class: "circle" },
];

// Array of phrases with placeholder for shape
const phrases = [
  "How’re ya now? That’s a mighty fine {shape} you got there.",
  "Look at this beauty of a {shape}. Get after it, bud!",
  "Well, pitter-patter, you hovered on the {shape}.",
  "Hooo, big shoots! You found the {shape}, eh?",
  "There ya go. Hoverin’ on the ol’ {shape}. Good on ya.",
  "Wow, you found the {shape}? Maximum effort!",
  "Oh, you’re getting touchy-feely with the {shape}. Classic!",
  "Nice {shape} hover! Are you trying to impress me?",
  "Look at you, hovering over the {shape}. Didn’t see that coming.",
];

// Function to get a random phrase and replace placeholder with the shape name
function getRandomPhrase(shape) {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex].replace("{shape}", shape);
}

// Set feedback message on hover
function setFeedback(shape) {
  feedback.value = getRandomPhrase(shape);
}

// Clear feedback message on mouseout
function clearFeedback() {
  feedback.value = "";
}
</script>

<style scoped>
/* Container for the entire project */
.project-example {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(249, 249, 249, 0.664);
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}

/* Styling for the interaction section */
.shape-interaction {
  text-align: center;
  width: 100%;
}

/* Header styles */
header h1 {
  font-size: 2rem;
  color: black;
  margin-bottom: 20px;
}

/* Subheading for choosing a shape */
article h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: black;
}

/* Styling for shapes container */
.shape {
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100px;
  height: 100px;
}

.shape:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Individual shape styles */
.square {
  background: #e74c3c;
  border-radius: 8px;
}

.triangle {
  background: #f1c40f;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.circle {
  background: #3498db;
  border-radius: 50%;
}

/* Feedback text styles */
#feedback {
  font-size: 1.2rem;
  color: #666;
  margin-top: 20px;
  height: 1.5em; /* Prevent content shifting */
  text-align: center;
  letter-spacing: 0.05em;
  transition: color 0.3s ease-in-out;
}
</style>
