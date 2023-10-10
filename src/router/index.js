import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.Base_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/vanilla/',
      name: 'vanilla',
      component: () => import('../views/VanillaView.vue'),
    },
  ],
});

export default router;
