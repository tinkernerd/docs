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
/* Styles for Shape Hover Interaction Project */

.shape-interaction {
  max-width: 600px;
  margin: 20px auto;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.shape {
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.shape:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Individual Shapes */
.square {
  width: 120px;
  height: 120px;
  background: red;
  border-radius: 8px;
}

.triangle {
  width: 120px;
  height: 120px;
  background: yellow;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.circle {
  width: 120px;
  height: 120px;
  background: blue;
  border-radius: 50%;
}

#feedback {
  font-size: 1.2rem;
  color: #666;
  margin-top: 20px;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
  height: 1.5em; /* Set a fixed height to prevent shifting */
  overflow: hidden; /* Ensures no extra spacing if text overflows */
  text-align: center;
}
</style>
