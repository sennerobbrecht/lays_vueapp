import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Vote from '../views/Vote.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/vote', name: 'Vote', component: Vote }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
