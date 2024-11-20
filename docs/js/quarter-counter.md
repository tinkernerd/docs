---
title: Quarter Year Counter
outline: deep
---

# {{ $frontmatter.title }}

<script setup>
import QuarterYearCounter from '@theme/components/Projects/QuarterYearCounter.vue'
</script>

## Project Summary:
The **QuarterYearCounter** is a Vue.js component designed to track counts for different years (e.g., '00, '01, '02) and calculate their total based on a quarter-year multiplier (0.25). The component allows users to increment counters using keyboard shortcuts or by clicking buttons. A "Reset All" button resets all counters, while individual reset buttons allow resetting specific year counters.

## Working Example:
<QuarterYearCounter/>

## Explanation:

### HTML Structure
The HTML structure for the component consists of:
- A container (`.main-box`) that holds all the elements.
- A header (`<h1>`) for the component title.
- A **Reset All** button to reset all counters simultaneously.
- A flex container (`.container`) for individual year counters, each represented by:
  - A header (`<h2>`) for the year label.
  - A counter display (`<p class="counter">`).
  - A reset button for the individual year counter.
- A **Total Counter** display below the year boxes.

#### Template Code:
```html
<template>
  <div class="quarter-year-counter">
    <div class="main-box">
      <h1>Quarter Year Counter</h1>
      <div class="reset-button-container">
        <button class="big-red-button" @click="resetAll">Reset All</button>
      </div>
      <div class="container">
        <div class="year-box" v-for="year in years" :key="year.id" :id="`year-${year.id}`">
          <h2>{{ year.label }}</h2>
          <p class="counter">{{ year.count }}</p>
          <button class="reset-button" @click="resetCounter(year.id)">Reset</button>
        </div>
      </div>
      <div class="total-container">
        <p class="total-counter">Total = ${{ total.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
```

### JavaScript Code Explanation
The JavaScript manages the component's data, methods, and keyboard interactions:
1. **Data Properties**:
   - `years`: An array of objects containing IDs, labels, and counters for each year.
   - `total`: A calculated total counter.

2. **Methods**:
   - `incrementCounter(yearId)`: Increments the count for the given year ID and updates the total.
   - `resetCounter(yearId)`: Resets the counter for the given year ID to zero and updates the total.
   - `resetAll()`: Resets all counters to zero and updates the total.
   - `updateTotal()`: Recalculates the total counter by summing up all counts and multiplying by 0.25.

3. **Keyboard Shortcuts**:
   - Specific keys (e.g., F15, F16, F18, F17) are mapped to year counters. When pressed, the corresponding counter increments.

#### JavaScript Code:
```javascript
<script>
export default {
  data() {
    return {
      years: [
        { id: "00", label: "'00", count: 0 },
        { id: "01", label: "'01", count: 0 },
        { id: "02", label: "'02", count: 0 },
        { id: "others", label: "Others", count: 0 }
      ],
      total: 0
    };
  },
  methods: {
    incrementCounter(yearId) {
      const year = this.years.find((y) => y.id === yearId);
      if (year) {
        year.count += 1;
        this.updateTotal();
      }
    },
    resetCounter(yearId) {
      const year = this.years.find((y) => y.id === yearId);
      if (year) {
        year.count = 0;
        this.updateTotal();
      }
    },
    resetAll() {
      this.years.forEach((year) => (year.count = 0));
      this.updateTotal();
    },
    updateTotal() {
      this.total = this.years.reduce((sum, year) => sum + year.count, 0) * 0.25;
    }
  },
  mounted() {
    const keyMap = {
      F15: "00",
      F16: "01",
      F18: "02",
      F17: "others"
    };

    window.addEventListener("keydown", (event) => {
      const yearKey = keyMap[event.code];
      if (yearKey) {
        this.incrementCounter(yearKey);
      }
    });
  }
};
</script>
```

### CSS Explanation
To isolate the styles for the **QuarterYearCounter** component, all styles are scoped under `.quarter-year-counter`. These styles ensure a clean layout, responsive design, and intuitive user interface.

#### CSS Code:
```css
<style lang="css">
.quarter-year-counter {
  .main-box {
    background: #ffffff;
    border: 2px solid #dedede;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 900px;
    margin: auto;
  }

  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }

  .reset-button-container {
    margin-bottom: 20px;
  }

  .big-red-button {
    padding: 12px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #d9534f;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .year-box {
    background: #ffffff;
    border: 1px solid #dedede;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    width: 150px;
  }

  .total-container {
    margin-top: 20px;
  }

  .total-counter {
    font-size: 20px;
    color: #387c3b;
    font-weight: bold;
  }
}
</style>
```

## <u>Notes:</u>
- **Reset Logic**: The counters can be reset individually or collectively.
- **Keyboard Integration**: Customizable shortcuts allow users to increment specific counters without using the mouse.
- **Responsiveness**: The flex layout ensures consistent design across screen sizes.

