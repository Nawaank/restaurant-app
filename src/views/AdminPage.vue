<template>
    <div class="cart">
      <h1>Votre Panier</h1>
      <div v-for="item in panier" :key="item.id">
        <PanierItem
          :item="item"
          @remove-item="removeItem"
          @update-quantity="updateQuantity"
        />
      </div>
      <p>Total : {{ total }}€</p>
      <button @click="finaliserCommande">Finaliser la commande</button>
    </div>
  </template>
  
  <script>
  import PanierItem from '../components/PanierItem.vue';
  
  export default {
    components: { PanierItem },
    data() {
      return {
        panier: [], // Les données seront partagées avec Provide/Inject
      };
    },
    computed: {
      total() {
        return this.panier.reduce((sum, item) => sum + item.prix * item.quantite, 0);
      },
    },
    methods: {
      removeItem(id) {
        this.panier = this.panier.filter(item => item.id !== id);
      },
      updateQuantity({ id, quantite }) {
        const item = this.panier.find(item => item.id === id);
        if (item) item.quantite = quantite;
      },
      finaliserCommande() {
        alert('Commande finalisée avec succès !');
        this.panier = [];
      },
    },
  };
  </script>
  