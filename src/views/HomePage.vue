<template>
    <div class="home">
      <h1>Bienvenue au Restaurant Gourmet</h1>
      <p>Découvrez nos délicieux plats faits maison.</p>
      <router-link to="/menu">
        <button>Voir le menu</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style>
  /* Ajoutez du style personnalisé ici */
  </style>
  