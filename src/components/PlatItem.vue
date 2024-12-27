<template>
  <div class="plat-item">
    <h3>{{ plat.nom }}</h3>
    <p>Prix : {{ plat.prix }}€</p>
    <slot name="badge"></slot>
    <button @click="addToCart">Ajouter au panier</button>
  </div>
</template>
  
<script>
  export default {
    props: ['plat'],
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.plat);
      },
    },
  };
</script>
  