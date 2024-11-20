<template>
  <div>
    <table class="live-metar">
      <thead>
        <tr>
          <th class="top-text">Airport</th>
          <th class="top-text">METAR</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="airport in airports" :key="airport">
          <td>{{ airport }}</td>
          <td>
            <pre>{{ metars[airport] || 'Loading...' }}</pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      airports: ['KBEH', 'KMDW', 'KSBN', 'KORD'], // List of airports
      metars: {}, // Store METAR data for each airport
      apiKey: 'pOeQWCeTA9r2lfI4p0_YUlYmNo-qsKXGlCt-aU1zWNY', // Replace with your actual API key
    };
  },
  methods: {
    async fetchMetar(airport) {
      try {
        const response = await fetch(
          `https://avwx.rest/api/metar/${airport}?token=${this.apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          return data.sanitized;
        }
        return 'Unable to fetch METAR';
      } catch (error) {
        console.error(`Error fetching METAR for ${airport}:`, error);
        return 'Error fetching METAR';
      }
    },
    async updateMetars() {
      for (const airport of this.airports) {
        const metar = await this.fetchMetar(airport);
        // Directly update the object property
        this.metars[airport] = metar;
      }
    },
  },
  mounted() {
    this.updateMetars(); // Fetch METAR data when the component is mounted
    setInterval(this.updateMetars, 3600000); // Refresh METAR data every hour
  },
};
</script>

<style scoped lang="scss">
.live-metar {
  width: 1920px;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  .top-text {
    background: none; // Removes the background color
    font-weight: bold; // Makes the text bold
    color: #387c3b; // Your preferred green
  }
}

</style>
