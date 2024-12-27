<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { reactive, provide } from 'vue';
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  setup() {
    const panier = reactive([]);
    provide('panier', panier);
    console.log('Panier fourni dans App.vue :', panier);

    provide('addToCart', (plat) => {
      const existingItem = panier.find(item => item.id === plat.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        panier.push({ ...plat, quantity: 1 });
      }
    });
    provide('removeFromCart', (id) => {
      const index = panier.findIndex(item => item.id === id);
      if (index > -1) panier.splice(index, 1);
    });
    provide('updateQuantity', (id, quantity) => {
      const item = panier.find(item => item.id === id);
      if (item) item.quantity = quantity;
    });

    return {};
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

main {
  padding: 2rem;
}
</style>
