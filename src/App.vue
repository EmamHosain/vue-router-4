<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">about</RouterLink>
      <RouterLink to="/contact">contact</RouterLink>
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
}

nav a.exact-active-class {
  background-clip: green;
}
</style>
