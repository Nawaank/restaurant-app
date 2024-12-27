<template>
  <div class="panier-item">
    <div class="item-details">
      <h3>{{ item.nom }}</h3>
      <p>Prix unitaire : {{ item.prix }} €</p>
      <p>Total : {{ (item.prix * item.quantity).toFixed(2) }} €</p>
    </div>
    <div class="item-actions">
      <span>{{ item.quantity }}</span>
      <button @click="removeItem" class="remove-button">Supprimer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanierItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeItem() {
      this.$emit("remove-item", this.item.id);
    },
  },
};
</script>


  
  
  <style scoped>
  .panier-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
  }
  
  .item-details h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .item-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .item-actions button {
    padding: 0.5rem;
    background-color: #ff7043;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .item-actions button:hover {
    background-color: #e64a19;
  }
  
  .remove-button {
    background-color: #d32f2f;
  }
  
  .remove-button:hover {
    background-color: #b71c1c;
  }
  
  .item-actions span {
    font-size: 1rem;
    margin: 0 0.5rem;
  }
  </style>
  