<template>
    <div class="menu">
      <h1>Notre Menu</h1>
      <div class="plats">
        <PlatItem
          v-for="plat in plats"
          :key="plat.id"
          :plat="plat"
          @add-to-cart="addToCart"
        />
      </div>
    </div>
  </template>
  
  <script>
  import PlatItem from '../components/PlatItem.vue';
  
  export default {
    components: { PlatItem },
    data() {
      return {
        plats: [
          { id: 1, nom: 'Pizza Margherita', prix: 12 },
          { id: 2, nom: 'Burger Classique', prix: 10 },
          { id: 3, nom: 'Salade César', prix: 8 },
        ],
      };
    },
    methods: {
      addToCart(plat) {
        alert(`${plat.nom} ajouté au panier`);
        this.$emit('add-to-cart', plat); // Émission d'événement
      },
    },
  };
  </script>
  