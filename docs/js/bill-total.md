---
outline: deep
title: Lunch Order Cost Calculator
---
<script setup>
import TotalBill from '@theme/components/Projects/BillTotal.vue'
</script>

# Bill Total

This project demonstrates a simple lunch ordering system where users select items, and the total cost updates in real-time based on their choices.
### Full Working Example:
<TotalBill/>

## Explanation:


### HTML Structure

The HTML structure consists of checkboxes representing menu items, each with a price value. The total order cost is displayed in real time based on selections.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Lunch Order Cost Calculator</title>
    <link rel="stylesheet" href="styles.css">
    <script src="project03-01.js" defer></script>
</head>

<body>
    <header>
        <h1>Lunch Order Cost Calculator</h1>
    </header>
    <article>
        <h2>Lunch selections</h2>
        <form>
            <input type="checkbox" class="menuItem" id="item1" value="11.95" />
            <label for="item1">Fried chicken ($11.95)</label>
            <input type="checkbox" class="menuItem" id="item2" value="13.95" />
            <label for="item2">Fried halibut ($13.95)</label>
            <input type="checkbox" class="menuItem" id="item3" value="10.95" />
            <label for="item3">Hamburger ($10.95)</label>
            <input type="checkbox" class="menuItem" id="item4" value="17.95" />
            <label for="item4">Grilled salmon ($17.95)</label>
            <input type="checkbox" class="menuItem" id="item5" value="8.95" />
            <label for="item5">Side salad ($8.95)</label>
        </form>
        <aside>
            Total Order Cost: <span id="billTotal">$0</span>
        </aside>
    </article>
</body>
</html>
```

### JavaScript Code Explanation

The JavaScript code calculates the total cost based on selected menu items. Each checkbox is linked to the `calcTotal` function through an event listener. The total is formatted as currency and displayed in real time.

### JavaScript Functions

The JavaScript functions handle item selection and total cost calculation:

```javascript
/*    JavaScript 7th Edition
        Chapter 3
        Project 03-01

        Application to calculate total order cost
        Author: Nick Stull
        Date:   2024.09.24
        
        Github Repo: tinkernerd/ISYS115 

        Filename: project03-01.js
*/

// Get all elements with the class "menuItem"
var menuItems = document.getElementsByClassName("menuItem");

// Add an event listener to each menu item to call calcTotal() when clicked
for (var i = 0; i < menuItems.length; i++) {
     menuItems[i].addEventListener("click", calcTotal, false);
}

// Function to calculate the total order cost
function calcTotal() {
     var orderTotal = 0;
     for (var i = 0; i < menuItems.length; i++) {
          if (menuItems[i].checked) {
                orderTotal += Number(menuItems[i].value);
          }
     }
     document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}
     
// Function to format the total as currency
function formatCurrency(value) {
     return "$" + value.toFixed(2);
}
```

