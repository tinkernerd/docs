---
title: Book Review Comment
outline: deep
---

<script setup>
import BookReview from '@theme/components/Projects/BookReview.vue'
</script>

# Book Review Comment


## Project Summary:
This script updates a character count in real time as a user types into a textarea element. It also displays a warning if the character count exceeds a certain limit.

## Working Example:

<BookReview/>


### HTML Structure

The HTML consists of a textarea element where the user types in their comment. The text area is labeled with a character count and a limit of 1000 characters. The actual character count is displayed in real time as the user types. When the character count is exceeded, a warning message is displayed.

```html
<textarea id="comment" rows="" cols=""></textarea>

<div id="countLabel">
Character Count: <span id="countValue">0</span> / <span id="limit">1000</span>
</div>

<div id="warningBox"></div>
```
### JavaScript Code Explanation

The JavaScript code first sets the maximum length of the review to 100 characters. It references the HTML elements of the character count box and warning box. The script then adds an event listener for the "keyup" event on the comment box. When this event is triggered by the user typing, the `updateCount` function is called. The `updateCount` function counts the number of characters in the comment box and updates the character count box. If the character count exceeds the maximum review length, the script displays a warning message.

```javascript
    // Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
wordCountBox = document.getElementById("countValue");
warningBox = document.getElementById("warningBox");

// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
  // Set the warning box to an empty text string
  warningBox.innerHTML = "";

  // Count the number of characters in the comment box
  commentText = document.getElementById("comment").value;
  charCount = countCharacters(commentText);

  // Update the word count box
  wordCountBox.innerHTML = charCount;

  // Check if the character count exceeds the maximum review length
  if (charCount > MAX_REVIEW) {
    warningBox.innerHTML = "Your review exceeds the maximum length.";
  }
}

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
  var commentregx = /\s/g;
  var chars = textStr.replace(commentregx, "");
  return chars.length;
}
```