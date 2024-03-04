import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Welcome from '../components/Welcome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/',
      redirect: '/login' 
    },

  ]
});

export default router;