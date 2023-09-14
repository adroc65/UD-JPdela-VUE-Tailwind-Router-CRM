import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ClientesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: { titulo: "Listado de Clientes"},
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/NuevoClienteView.vue'),
      props: {titulo: "Agregar Cliente"},
    },
  ]
})

export default router
