<script setup>
import { ref, onMounted } from 'vue';

// Array of Jane Austen Quotes
const quotes = [
  "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
  "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
  "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
  "Life seems but a quick succession of busy nothings.",
  "Our scars make us know that our past was for real.",
  "I cannot speak well enough to be unintelligible.",
  "One cannot be always laughing at a man without now and then stumbling on something witty.",
  "Men were put into the world to teach women the law of compromise.",
  "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid."
];

// Reactive quote variable
const currentQuote = ref("");

// Function to generate and set a random quote
function quoteGenerator() {
  const randomIndex = randomInt(0, quotes.length - 1);
  currentQuote.value = `"${quotes[randomIndex]}"`;
}

// Function to return a random integer between lowest and highest, inclusive
function randomInt(lowest, highest) {
  const size = highest - lowest + 1;
  return Math.floor(lowest + size * Math.random());
}

// Generate a quote when the component is mounted
onMounted(quoteGenerator);
</script>

<template>
  <blockquote class="clean-quote">{{ currentQuote }}</blockquote>
</template>

<style scoped>
:root {
  --blockquote-text-light: #000; /* Black text for light mode */
  --blockquote-text-dark: #fff; /* White text for dark mode */
}

.clean-quote {
  font-style: italic;
  font-size: 1.2em;
  text-align: center;
  margin: 20px auto;
  max-width: 600px;
  color: var(--blockquote-text-light); /* Default to light mode */
  transition: color 0.3s ease;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .clean-quote {
    color: var(--blockquote-text-dark); /* Switch to white in dark mode */
  }
}
</style>
