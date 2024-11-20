---
title: Updatable Table
outline: deep
---

<script setup>
import DynamicTable from '@theme/components/Projects/DynamicTable.vue'
</script>

# Updatable Table
In this example, JavaScript variables are used to dynamically populate a table with high-speed internet service plans and their corresponding download speeds. Below is the setup for each variable and the table structure in HTML.

## Working Example of the High-Speed Internet Plans Table

<DynamicTable/>

Here’s the complete code, where JavaScript defines the service plans and their speeds and injects the content into an HTML table.

## JavaScript Code Explanation

We define the names and download speeds for each internet service using JavaScript variables. Here’s the code that initializes these variables:

```javascript
// Define internet service names
let service1Name = "Basic";
let service2Name = "Express";
let service3Name = "Extreme";
let service4Name = "Ultimate";

// Define internet service speeds
let service1Speed = "0 Mbps";
let service2Speed = "100 Mbps";
let service3Speed = "500 Mbps";
let service4Speed = "1 Gig";
```

Each variable is then displayed inside an HTML `<table>` using `document.write` to dynamically inject these values into the table cells. This setup provides an easily readable display of services and their speeds.

## HTML Table Code with JavaScript

Below, each `<script>` tag writes a variable’s value into the respective table cell to complete the display.

```html
<table>
   <thead>
      <tr>
         <th>Service</th>
         <th>Download Speed (Mbps)</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><script>document.write(service1Name);</script></td>
         <td><script>document.write(service1Speed);</script></td>
      </tr>
      <tr>
         <td><script>document.write(service2Name);</script></td>
         <td><script>document.write(service2Speed);</script></td>
      </tr>
      <tr>
         <td><script>document.write(service3Name);</script></td>
         <td><script>document.write(service3Speed);</script></td>
      </tr>
      <tr>
         <td><script>document.write(service4Name);</script></td>
         <td><script>document.write(service4Speed);</script></td>
      </tr>
   </tbody>
</table>
```

