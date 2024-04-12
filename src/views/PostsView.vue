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
        <div v-for="item in posts" :key="item.id">
            <!-- <h2><router-link :to="`/posts/${item.id}`">{{ item.title }}</router-link></h2> -->

            <!-- name route with params -->
            <!-- <h2>
                <router-link
                    :to="{ name: 'posts-details', params: { id: item.id, slug: item.title.replaceAll(' ', '-') } }">{{
                        item.title
                    }}</router-link>
            </h2> -->



            <!-- programmatic navigation  -->
            <button @click="router.push({
                name: 'posts-details',
                params: { id: item.id, slug: item.title.replaceAll(' ', '-') },
                query: { tag: 'web' }
            })">
                {{ item.title }}
            </button>
        </div>
    </div>
</template>
  

  