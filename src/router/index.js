import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import PostsView from '../views/PostsView.vue'
import PostDetails from '../views/PostDetails.vue'
import NotFound from '../views/NotFound.vue';
import SidebarView from '../views/SidebarView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home-page',
    //   component: HomeView
    // },
    {
      path: '/about',
      name: 'about-page',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    // name view 
    {
      path: '/contact',
      name: 'contact-page',
      // render 2 page when user visit '/contact' this path
      components: { default: ContactView, sidebar: SidebarView }
    },
    {
      path: '/posts',
      name: 'posts-page',
      component: PostsView
    },

    // name route
    {
      path: '/posts/:id/:slug',
      name: 'posts-details',
      component: PostDetails
    },


    // when user visits invalid URL the 404 page will be show
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found-page',
      component: NotFound
    },
    // when the user visit the URL path '/home', the user will be redirect tha path '/'
    // {
    //   path: '/home',
    //   redirect: '/',
    // },


    // alias : when user visit these url such as '/home', '/my-home','/ghor', every URL valid for '/' this path
    {
      path: '/',
      name: 'home-page',
      component: HomeView,
      alias: ['/home', '/my-home', '/ghor'],
    },

  ]
})

export default router
