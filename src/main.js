import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')



// global guards
//authentication system and it's work
router.beforeEach((to, from) => {

    // console.log(to.meta);
    // if (!to.meta.isAuthenticated && to.name !== 'login-page') {
    //     return { name: 'login-page' }
    // }
    // if (to.meta.isAuthenticated && to.name == 'login-page') {
    //     return { name: 'home-page' }
    // }
})