
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { HelloWorld } from './components/HelloWorld.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/boundingbox-particle', component: () => import('./pages/boundingbox-particle/boundingbox-particle.vue')},
  { path: '/full-screen-particle', component: () => import('./pages/full-screen-particle/full-screen-particle.vue') },
  { path: '/multi-floor-navigation', component: () => import('./pages/multi-floor-navigation/multi-floor-navigation.vue') },
]

const router = new VueRouter({
  routes,
});
export default router
