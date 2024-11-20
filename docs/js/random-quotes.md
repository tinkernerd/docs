---
title: Random Quotes
outline: deep

---

<script setup>
import RandQuote from '@theme/components/Projects/RandQuote.vue'
</script>

# Random Quotes
This project is a simple quote generator that displays a random quote from Jane Austen on each page load. It uses JavaScript to select a random quote from an array of quotes.

## Working Example:

### Random Quotes from Jane Austen:

<RandQuote/>

## Explanation:

### HTML Structure

The HTML code is creating a single element: a `<blockquote>` with the id "blockquote". This element is where the randomly generated quote will be displayed.

```html
<blockquote id="blockquote"></blockquote>
```

### JavaScript Code Explanation


The JavaScript code initializes an array named `quotes`, which holds a collection of famous quotes by Jane Austen. Each quote is a string element within the array.

The script listens for the `load` event on the `window` object, which triggers the `quoteGenerator` function when the webpage is fully loaded. This ensures that a random quote is displayed every time the page is loaded.

The `quoteGenerator` function is responsible for generating and displaying the random quote. It first determines the total number of quotes available in the `quotes` array by using the `length` property. It then calls the `randomInt` function to generate a random integer within the range of valid indices in the `quotes` array. This random integer is used to select a quote from the array.

Once the quote is selected, it is formatted with quotation marks and then inserted into the HTML element with the ID `blockquote` using `innerHTML`.

The `randomInt` function generates a random integer between the specified `lowest` and `highest` values (inclusive). It calculates the range size and uses `Math.random()` and `Math.floor()` to ensure a fair distribution of random numbers within the given range.

```javascript
// Array of Jane Austen Quotes
let quotes = [
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
    "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
    "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
    "Life seems but a quick succession of busy nothings.",
    "Our scars make us know that our past was for real.",
    "I cannot speak well enough to be unintelligible.",
    "One cannot be always laughing at a man without now and then stumbling on something witty.",
    "Men were put into the world to teach women the law of compromise.",
    "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
];
// Run the quote generator every time the page loads
window.addEventListener("load", quoteGenerator);
// Function to generate and display a random quote
function quoteGenerator() {
    // Number of quotes in the array
    let quoteCount = quotes.length;
    // Generate a random integer to select a quote
    let randomQuotes = randomInt(0, quoteCount - 1);
    // Retrieve a randomly-selected quote
    let quote = quotes[randomQuotes];
    // Add quotation marks before and after the quote
    quote = `"${quote}"`;
    // Display the random quote
    document.getElementById("blockquote").innerHTML = quote;
}
/*=================================================================*/
// Function to return a randomly-selected integer between lowest and highest, inclusive
function randomInt(lowest, highest) {
   let size = highest - lowest + 1;
   return Math.floor(lowest + size*Math.random());
}
```