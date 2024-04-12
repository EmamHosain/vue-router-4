<script setup>
import { useRouter } from "vue-router"
const router = useRouter();
const posts = [
    { id: 1, title: 'vue js course' },
    { id: 2, title: 'java course' },
    { id: 3, title: 'python course' },
    { id: 4, title: 'php course' },
    { id: 5, title: 'ruby course' },
];


function goForward() {
    return router.forward();
}

</script>
<template>
    <div>
        <h1>posts page |
            <button @click="goForward">forward</button>
        </h1>
        <hr>
        <div class="container">
            <div>

                <div v-for="item in posts" :key="item.id">
                    <!-- <h2><router-link :to="`/posts/${item.id}`">{{ item.title }}</router-link></h2> -->

                  
                    <h2>
                        <router-link :to="{ name: 'posts-details', params: { id: item.id } }">{{
                            item.title
                        }}</router-link>
                    </h2>
                </div>
            </div>


            <div>
                <!-- nested routes -->
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    
}
</style>
  

  