<template>
  <div class="order-example"> 
    <article> 
      <h1>Lunch Selections</h1>
      <form> 
        <div class="menu-item" v-for="(item, index) in menuItems" :key="index">
          <input 
            type="checkbox" 
            class="menuItem" 
            :id="'item' + index" 
            :value="item.price" 
            v-model="item.selected" 
          />
          <label :for="'item' + index">{{ item.name }} ({{ formatCurrency(item.price) }})</label>
        </div>
      </form> 
      <aside> 
        <strong>Total Order Cost:</strong> <span>{{ formatCurrency(totalCost) }}</span> 
      </aside> 
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Fried chicken", price: 11.95, selected: false },
        { name: "Fried halibut", price: 13.95, selected: false },
        { name: "Hamburger", price: 10.95, selected: false },
        { name: "Grilled salmon", price: 17.95, selected: false },
        { name: "Side salad", price: 8.95, selected: false },
      ],
    };
  },
  computed: {
    totalCost() {
      return this.menuItems
        .filter(item => item.selected)
        .reduce((sum, item) => sum + item.price, 0);
    },
  },
  methods: {
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
/* Container Styling */
.order-example {
  max-width: 600px;
  padding: 20px;
  margin: 20px auto;
  background-color: rgba(249, 249, 249, 0.664);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Title Styling */
.order-example h1 {
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

/* Form Layout */
.order-example form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Menu Item Styling */
.menu-item {
  display: flex;
  align-items: center;
}

.menu-item input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.2);
  accent-color: #2a7ae2;
}

.menu-item label {
  font-size: 1em;
  font-weight: 400;
  color: #555;
  cursor: pointer;
}

/* Hover Effect */
.menu-item label:hover {
  color: #2a7ae2;
}

/* Checked Item Styling */
.menuItem:checked + label {
  color: #2a7ae2;
}

/* Aside Styling */
.order-example aside {
  margin-top: 20px;
  font-size: 1.2em;
  color: #08A;
  text-align: center;
}
</style>
