<template>
    <div class="panier">
      <h1>Votre Panier</h1>
  
      <!-- Affichage des éléments du panier -->
      <div v-if="items.length > 0">
        <div class="panier-items">
          <PanierItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            @update-quantity="updateQuantity"
            @remove-item="removeItem"
          />
        </div>
  
        <!-- Résumé du total -->
        <div class="panier-total">
          <p>Total : <strong>{{ total.toFixed(2) }} €</strong></p>
          <button class="finalize-button" @click="finalizeOrder">Finaliser la commande</button>
        </div>
      </div>
  
      <!-- Message si le panier est vide -->
      <p v-else>Votre panier est vide. <router-link to="/menu">Retour au menu</router-link></p>
    </div>
  </template>
  
  <script>
  import PanierItem from "../components/PanierItem.vue";
  
  export default {
    name: "Panier",
    components: {
      PanierItem,
    },
    data() {
      return {
        items: [], // Les articles dans le panier
      };
    },
    computed: {
      // Calcul du total du panier
      total() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
    },
    methods: {
      // Mise à jour de la quantité d'un article
      updateQuantity(id, quantity) {
        const item = this.items.find((i) => i.id === id);
        if (item) {
          item.quantity = quantity;
        }
      },
      // Suppression d'un article
      removeItem(id) {
        this.items = this.items.filter((i) => i.id !== id);
      },
      // Finalisation de la commande
      finalizeOrder() {
        alert("Commande finalisée !");
        this.items = []; // Réinitialisation du panier
        this.$router.push("/menu"); // Retour au menu
      },
    },
    mounted() {
      // Récupération des articles du panier depuis un stockage global ou local
      const savedItems = JSON.parse(localStorage.getItem("panier")) || [];
      this.items = savedItems;
    },
    watch: {
      // Sauvegarde des articles du panier dans le localStorage à chaque modification
      items: {
        handler(newItems) {
          localStorage.setItem("panier", JSON.stringify(newItems));
        },
        deep: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .panier {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .panier-items {
    margin-bottom: 2rem;
  }
  
  .panier-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 5px;
  }
  
  .finalize-button {
    background-color: #28a745;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .finalize-button:hover {
    background-color: #218838;
  }
  </style>
  