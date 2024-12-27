<template>
  <div class="cart">
    <h1>Votre Panier</h1>
    <div v-for="item in panier" :key="item.id">
      <PanierItem
        :item="item"
        @remove-item="removeFromCart"
        @update-quantity="updateQuantity"
      />
    </div>
    <p>Total : {{ total }}€</p>
    <button @click="finaliserCommande">Finaliser la commande</button>
  </div>
</template>

<script>
  import PanierItem from '../components/PanierItem.vue';
  import { inject, computed, watch } from 'vue';

  export default {
    components: { PanierItem },
    setup() {
      const panier = inject('panier');
      const removeFromCart = inject('removeFromCart');
      const updateQuantity = inject('updateQuantity');

      const total = computed(() =>
        panier.reduce((sum, item) => sum + item.prix * item.quantity, 0)
      );

      // watch dogs
      watch(
        panier,
        (newPanier, oldPanier) => {
          console.log('Panier mis à jour :', newPanier);
          console.log('Ancien panier :', oldPanier);
        },
        { deep: true }
      );

      console.log('Panier injecté dans CartPage :', panier);

      return { panier, total, removeFromCart, updateQuantity };
    },
  };
</script>
