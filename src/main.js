import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')



// global guards
router.beforeEach(async (to, from) => {
    // console.log('from', from);
    // console.log('to', to);



    // if the path is '/about', user redirect to 'contact-page'
    // redirection system
    // if (to.path == '/about') {
    //     router.push({ name: 'contact-page' })
    // }



    // if user visit the path is '/contact', user can not go to the '/contact' page
    // if (to.path == '/contact') {
    //     return false;
    // }

    // authentication system
    // authentication system
    const isAuthenticated = true; // Replace this with your actual authentication logic

    router.beforeEach((to, from, next) => {
        if (!isAuthenticated && to.name !== 'login-page') {
            // If user is not authenticated and trying to access a route other than login, redirect to login
            next({ name: 'login-page' });
        } else if (isAuthenticated && to.path === '/login') {
            // If user is authenticated and trying to access login page, redirect to home
            next({ path: '/' });
        } else {
            // In all other cases, proceed to the requested route
            next();
        }
    });






})