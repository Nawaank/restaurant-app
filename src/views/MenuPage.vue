<template>
  <div class="menu">
    <h1>Notre Menu</h1>
    <div class="plats">
      <PlatItem
        v-for="plat in plats"
        :key="plat.id"
        v-bind:plat="plat"
        @add-to-cart="testAddToCart"
      >
        <template v-slot:badge v-if="plat.id === 1">
          <span class="badge">Nouveau</span>
        </template>
      </PlatItem>
    </div>
  </div>
</template>
  
<script>
  import PlatItem from '../components/PlatItem.vue';
  import { inject } from 'vue';

  export default {
    components: { PlatItem },
    setup() {
      const addToCart = inject('addToCart');
      const plats = [
        { id: 1, nom: 'Pizza Margherita', prix: 12 },
        { id: 2, nom: 'Burger Classique', prix: 10 },
        { id: 3, nom: 'Salade César', prix: 8 },
      ];

      const testAddToCart = (plat) => {
        console.log('Ajout au panier du plat :', plat);
        addToCart(plat);
      };

      return { plats, testAddToCart };
    },
  };
</script>
