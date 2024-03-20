// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import MiVista from '../src/components/MiVista.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/mivista',
    name: 'MiVista',
    component: MiVista
  },
  // Otras rutas de tu aplicación
];

const router = new VueRouter({
  routes
});

export default router;
