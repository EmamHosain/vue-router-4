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

//route scroll behavior
const isTrue = true;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomeView,
      // meta: { isAuthenticated: isTrue }

    },
    {
      path: '/about',
      name: 'about-page',
      component: () => import('../views/AboutView.vue'),
      // meta: { isAuthenticated: isTrue }
    },


    {
      path: '/contact',
      name: 'contact-page',
      component: ContactView,
      sensitive: true,
      strict: true,
      meta: { isAuthenticated: isTrue },

      // per route guards
      // when user visit the contact page user redirect to login-page
      beforeEnter: (to, from) => {
        if (!to.meta.isAuthenticated) {
          return { name: 'login-page' }
        }
      }

    },
    {
      path: '/sidebar',
      name: 'sidebar-page',
      component: SidebarView,
      sensitive: true,
      strict: true,
      // meta: { isAuthenticated: isTrue }

    },
    {
      path: '/blog',
      name: 'blog-page',
      component: BlogView,
      sensitive: true,
      strict: true,
      // meta: { isAuthenticated: isTrue }

    },

    // nested route
    {
      path: '/posts',
      // name: 'posts-page',
      component: PostsView,
      // meta: { isAuthenticated: isTrue },

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
          // meta: { isAuthenticated: isTrue }

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
      // meta: { isAuthenticated: isTrue }
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
