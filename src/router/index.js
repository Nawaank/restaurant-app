import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MenuPage from '../views/MenuPage.vue';
import CartPage from '../views/CartPage.vue';
import PanierPage from '../views/PanierPage.vue';
import AdminPage from '../views/AdminPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/menu', component: MenuPage },
  { path: '/cart', component: CartPage },
  { path : '/panier', component: PanierPage},
  { path: '/admin', component: AdminPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
