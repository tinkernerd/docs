---
outline: deep
title: Temp Conversion
---
<script setup>
import TempConv from '@theme/components/Projects/TempConv.vue'
</script>

# Celsius to Fahrenheit Converter

This project demonstrates a temperature converter that switches between Celsius and Fahrenheit. The header color updates based on the temperature range, making it visually engaging for specific temperature ranges.

## Full Working Example:
<TempConv/>

## Explanation:

### HTML Structure

The HTML layout defines the temperature converter, with `input` fields for Celsius and Fahrenheit values. JavaScript handles the conversion and updates the display dynamically.

```html
<!-- HTML structure for Temperature Converter -->
<div class="temp-converter">
   <article>
      <h2>Because math is hard, duh.</h2>
      <form>
         <div>
            <h3>Temp in F</h3>
            <input type="number" id="fValue" value="32" />
         </div>
         <div id="arrow">&harr;</div>
         <div>
            <h3>Temp in C</h3>
            <input type="number" id="cValue" value="0" />            
         </div>
      </form>
      <footer>
         Enter a Fahrenheit or Celsius temperature in either input box and press Tab to convert.
      </footer>
   </article>
</div>
```

### JavaScript Code Explanation

This JavaScript handles temperature conversion and header color updates based on the temperature range:

```javascript
// Convert Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
  return parseFloat(((degree - 32) / 1.8).toFixed(2));
}

// Convert Celsius to Fahrenheit
function CelsiusToFahrenheit(degree) {
  return parseFloat((degree * 1.8 + 32).toFixed(2));
}

// Event listener for Celsius input
document.getElementById("cValue").onchange = function () {
  const cDegree = parseFloat(document.getElementById("cValue").value);
  document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
  updateHeaderColor();
};

// Event listener for Fahrenheit input
document.getElementById("fValue").onchange = function () {
  const fDegree = parseFloat(document.getElementById("fValue").value);
  document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
  updateHeaderColor();
};

// Color update function
function updateHeaderColor() {
  const fValue = parseFloat(document.getElementById("fValue").value);
  const header = document.querySelector("header");
  
  if (fValue < 32) {
    header.classList.add("blue");
    header.classList.remove("yellow", "red");
  } else if (fValue > 80) {
    header.classList.add("red");
    header.classList.remove("yellow", "blue");
  } else {
    header.classList.add("yellow");
    header.classList.remove("blue", "red");
  }
}
```

