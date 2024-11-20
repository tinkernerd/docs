<template>
  <div class="quarter-year-counter">
    <div class="main-box">
      <!-- Title Section -->
      <div class="title-container">
        <h1>Quarter Year Counter</h1>
      </div>

      <!-- Reset Button Section -->
      <div class="reset-button-container">
        <button class="big-red-button" @click="resetAll">Reset All</button>
      </div>

      <!-- Boxes Section -->
      <div class="container">
        <div class="year-box" v-for="year in years" :key="year.id" :id="`year-${year.id}`">
          <h2 class="year">{{ year.label }}</h2>
          <hr />
          <p class="counter">{{ year.count }}</p>
          <button class="reset-button" @click="resetCounter(year.id)">Reset</button>
        </div>
      </div>

      <!-- Total Section -->
      <div class="total-container">
        <p class="total-counter">Total = ${{ total.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>




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

<style lang="css">
.quarter-year-counter {
  .main-box {
    background: #ffffff;
    border: 2px solid #dedede;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    text-align: center; /* Ensure all child elements are centered */
    width: 700px;
    margin: auto;
  }

  /* Title Section */
  .title-container {
    margin-bottom: 30px; /* Space below the title */
  }

  h1 {
    font-size: 32px;
    color: #333;
    margin: 0 auto 10px; /* Center the title and add spacing below */
    text-align: center;
    display: inline-block; /* Ensure block-like behavior for ::after */
    position: relative;
  }

  h1::after {
    content: '';
    display: block;
    width: 60%;
    height: 4px; /* Green bar height */
    background-color: #387c3b; /* Green color */
    margin: 10px auto 0; /* Center the green bar */
  }
  .reset-button {
    padding: 5px 10px;
    font-size: 14px;
    color: #fff;
    background-color: #d9534f; /* Red color */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  /* Reset Button Section */
  .reset-button-container {
    margin-bottom: 40px; /* Space between the reset button and the boxes */
    display: flex;
    justify-content: center;
  }

  .big-red-button {
    padding: 15px 30px;
    font-size: 16px;
    color: #fff;
    background-color: #d9534f; /* Red color */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .big-red-button:hover {
    background-color: #c9302c; /* Darker red on hover */
  }

  /* Boxes Section */
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center; /* Center all boxes in the container */
  }

  .year-box {
    background: #ffffff;
    border: 1px solid #dedede;
    border-radius: 8px;
    padding: 10px;
    text-align: center; /* Center all text inside the box */
    width: 120px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  }

  .year-box h2 {
    font-size: 18px; /* Adjust font size for better visibility */
    color: #387c3b; /* Green color for the year labels */
    margin: 0; /* Remove any default margins */
  }

  hr {
    border-top: 3px solid #387c3b; /* Green color for the divider */
    margin: 10px 0; /* Add space around the divider */
  }

  .counter {
    font-size: 24px; /* Larger font for the counter */
    color: #333; /* Standard text color */
  }

  /* Total Section */
  .total-container {
    margin-top: 30px; /* Space above the total counter */
  }

  .total-counter {
    font-size: 16px;
    color: #387c3b;
    font-weight: bold;
  }
}



</style>
