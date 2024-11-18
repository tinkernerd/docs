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
          <hr />
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
/* Scoped styles for QuarterYearCounter */
.quarter-year-counter {
  /* Main Box Styling */
  .main-box {
    background: #ffffff;
    border: 2px solid #dedede;
    border-radius: 10px;
    padding: 15px; /* Reduced padding */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Adjusted shadow */
    text-align: center;
    width: 700px; /* Reduced width */
    margin: auto;
  }

  h1 {
    font-size: 24px; /* Scaled down font size */
    color: #333;
    margin-bottom: 15px; /* Reduced margin */
    position: relative;
  }

  h1::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px; /* Scaled down width */
    height: 3px; /* Scaled down height */
    background-color: #387c3b;
  }

  .reset-button-container {
    margin-bottom: 15px; /* Reduced margin */
  }

  .big-red-button {
    padding: 10px 15px; /* Reduced padding */
    font-size: 14px; /* Reduced font size */
    color: #fff;
    background-color: #d9534f;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .big-red-button:hover {
    background-color: #c9302c;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px; /* Reduced gap */
    justify-content: center;
  }

  .year-box {
    background: #ffffff;
    border: 1px solid #dedede;
    border-radius: 8px;
    padding: 10px; /* Reduced padding */
    text-align: center;
    width: 120px; /* Adjusted width for smaller box */
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1); /* Adjusted shadow */
  }

  .year-box h2 {
    font-size: 16px; /* Reduced font size */
    color: #387c3b;
    margin-bottom: 5px; /* Reduced margin */
  }

  .year-box hr {
    border: none;
    border-top: 2px solid #387c3b;
    margin: 5px 0;
  }

  .counter {
    font-size: 24px; /* Reduced font size */
    color: #333;
  }

  .reset-button {
    margin-top: 5px; /* Reduced margin */
    padding: 5px 10px; /* Reduced padding */
    font-size: 12px; /* Reduced font size */
    color: #fff;
    background-color: #d9534f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .reset-button:hover {
    background-color: #c9302c;
  }

  .total-container {
    margin-top: 15px; /* Reduced margin */
  }

  .total-counter {
    font-size: 16px; /* Reduced font size */
    color: #387c3b;
    font-weight: bold;
  }
}

</style>
