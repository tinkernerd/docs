---
title: Using JavaScript `document.write` for Dynamic HTML Content
outline: deep
---

<script setup>
import DocWrite from '@theme/components/Projects/DocWrite.vue'
</script>

# Using JavaScript `document.write` for Dynamic HTML Content

In this exercise, we use JavaScript's `document.write` method to dynamically create a list in HTML. This approach allows you to inject content directly into the page as it loads.

## Financial Planning Tips Displayed Dynamically

To illustrate how JavaScript can generate HTML content on the fly, we’ve replicated the financial planning tips list below:

### Example: Financial Planning Tips Displayed Dynamically

<DocWrite />

## The HTML/JavaScript Code

```html
<script>
  // Creating an ordered list with JavaScript
  document.write("<ol>");
  document.write("<li>Reduce spending on non-necessities.</li>");
  document.write("<li>Use extra money to pay off debt, starting with the highest-interest credit cards.</li>");
  document.write("<li>Continue paying off debts until you are debt-free.</li>");
  document.write("<li>Set aside a fixed percentage of your income with every paycheck.</li>");
  document.write("</ol>");
</script>
