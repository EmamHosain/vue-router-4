<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div>
    <nav>
      <!-- programmatic navigation  -->

      <!-- method 1 -->
      <!-- <button @click="router.push('/')">Home</button>
     <button @click="router.push('/about')">About</button>
     <button @click="router.push('/contact')">Contact</button>
     <button @click="router.push('/sidebar')">Sidebar</button>
     <button @click="router.push('/posts')">posts</button> -->


      <!-- method 2 -->
      <button @click="router.push({ name: 'home-page' })">Home</button>
      <button @click="router.push({ name: 'about-page' })">about</button>
      <button @click="router.push({ name: 'contact-page' })">contact</button>
      <button @click="router.push({ name: 'sidebar-page' })">sidebar</button>
      <button @click="router.push({ name: 'posts-page' })">posts</button>



    </nav>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
nav a {
  display: inline-block;
  margin-left: 2rem;
  padding: 1rem;
  font-size: 2rem;
}

nav .exact-active-class {
  background-clip: green;
}

button {
  margin-right: 1rem;
}
</style>
