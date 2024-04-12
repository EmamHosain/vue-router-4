import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import PostsView from '../views/PostsView.vue'
import PostDetails from '../views/PostDetails.vue'
import NotFound from '../views/NotFound.vue';
import SidebarView from '../views/SidebarView.vue'



// vue router syntax matching with regex
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
      component: () => import('../views/AboutView.vue')
    },


    {
      path: '/contact',
      name: 'contact-page',
      component: ContactView,
      sensitive: true,
      strict: true,

    },

    // sidebar page valid when id is numeric
    // {
    //   path: '/sidebar/:id(\\d+)',
    //   name: 'sidebar-page',
    //   component: SidebarView,

    // },


    // optional perameter
    // {
    //   path: '/sidebar/:id?',
    //   name: 'sidebar-page',
    //   component: SidebarView,

    // },



    // sensetive perameter 
    {
      path: '/sidebar/:name?',
      name: 'sidebar-page',
      component: SidebarView,
      sensitive: true,
      strict: true,

    },
    {
      path: '/posts',
      name: 'posts-page',
      component: PostsView
    },


    // using regsex, id should be only number
    {
      path: '/posts/:id(\^-?\d+$\)/:slug',
      name: 'posts-details',
      component: PostDetails,

    },
    // for 404 not found page 
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found-page',
      component: NotFound
    },

  ]
})

export default router
