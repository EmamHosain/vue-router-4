<script setup>
import { useRouter } from "vue-router";


const router = useRouter();
</script>

<template>
  <div class="container">
    <nav class="container">
      <router-link :to="{ name: 'home-page' }">home</router-link>
      <router-link :to="{ name: 'about-page' }">about</router-link>
      <router-link :to="{ name: 'contact-page' }">contact</router-link>
      <router-link :to="{ name: 'sidebar-page' }">sidebar</router-link>
      <router-link :to="{ name: 'blog-page' }">blog</router-link>
      <router-link :to="{ path: '/posts' }">posts</router-link>
      <router-link :to="{ name: 'login-page' }">login</router-link>


    </nav>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
nav a {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.4rem;
  font-size: 2rem;
}

nav .exact-active-class {
  background-color: rgb(0, 21, 128);
}

button {
  margin-right: 1rem;
}

.container {
  text-align: center;
  width: 1200px;
  margin: auto;
}

a {
  text-decoration: none;
  display: inline-block;
  background-color: rgba(0, 128, 0, 0.271);
  color: black;
  text-transform: capitalize;
  border-radius: 0.5rem;
}

.router-link-active {
  background-color: green;
  color: white;
}
</style>
