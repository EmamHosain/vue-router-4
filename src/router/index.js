import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import  PostsView from '../views/PostsView.vue'
import PostDetails from '../views/PostDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about-page',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } ,
    {
      path: '/contact',
      name: 'contact-page',
      component: ContactView
    },
    {
      path: '/posts',
      name: 'posts-page',
      component: PostsView
    },
    {
      path: '/posts/:id',
      name: 'posts-details',
      component: PostDetails
    },
  ]
})

export default router
