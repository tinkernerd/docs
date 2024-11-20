<template>
  <table class="speed-table">
    <thead>
      <tr>
        <th>Service</th>
        <th>Download Speed (Mbps)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(service, index) in services" :key="index">
        <td>{{ service.name }}</td>
        <td>{{ service.speed }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { reactive } from "vue";

const services = reactive([
  { name: "Basic", speed: "0 Mbps" },
  { name: "Express", speed: "100 Mbps" },
  { name: "Extreme", speed: "500 Mbps" },
  { name: "Ultimate", speed: "1 Gig" },
]);
</script>

