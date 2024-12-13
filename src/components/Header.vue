<template>
    <header>
      <nav>
        <h1>{{ restaurantName }}</h1>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><router-link to="/panier">Panier</router-link></li>
          <li><router-link to="/admin">Commandes (Admin)</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
    data() {
      return {
        restaurantName: "Mon Restaurant en Ligne",
      };
    },
  };
  </script>
  
  <style scoped>
  header {
    background-color: #ff7043;
    color: white;
    padding: 1rem;
  }
  nav h1 {
    font-size: 1.5rem;
    margin: 0;
  }
  nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  nav ul li a.router-link-active {
    text-decoration: underline;
  }
  </style>
  