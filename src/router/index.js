import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import PostsView from '../views/PostsView.vue'
import PostDetails from '../views/PostDetails.vue'
import NotFound from '../views/NotFound.vue';
import SidebarView from '../views/SidebarView.vue'
import BlogView from '../views/BlogView.vue'
import NoPostView from '../views/NoPostView.vue'
import LoginView from '../views/LoginView.vue'



// resting route
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

      // per route guards
      // beforeEnter: () => {
      //   // return false;
      //   router.push('/about')
      // }

    },
    {
      path: '/sidebar',
      name: 'sidebar-page',
      component: SidebarView,
      sensitive: true,
      strict: true,
    },
    {
      path: '/blog',
      name: 'blog-page',
      component: BlogView,
      sensitive: true,
      strict: true,

    },

    // nested route
    {
      path: '/posts',
      // name: 'posts-page',
      component: PostsView,
      children: [
        // default page show
        {
          path: '',
          component: NoPostView
        },
        {
          path: ':id(\\d+)',
          name: 'posts-details',
          component: PostDetails,
        }
      ]
    },

    // for 404 not found page 
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found-page',
      component: NotFound
    },

    {
      path: '/login',
      name: 'login-page',
      component: LoginView,
      

    },

  ]
})

export default router
