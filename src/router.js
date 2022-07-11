
import { createRouter, createWebHistory } from "vue-router";
import { HelloWorld } from './components/HelloWorld.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/boundingbox-particle', component: () => import('./pages/boundingbox-particle/boundingbox-particle.vue')},
  { path: '/full-screen-particle', component: () => import('./pages/full-screen-particle/full-screen-particle.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
  
export default router;
