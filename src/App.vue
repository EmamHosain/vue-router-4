<script setup>

</script>

<template>
  <div>
    <nav>
      <!-- name route with params-->
      <RouterLink :to="{ name: 'home-page' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about-page' }">about</RouterLink>
      <RouterLink :to="{ name: 'contact-page' }">contact</RouterLink>
      <RouterLink :to="{ name: 'posts-page' }">posts</RouterLink>
    </nav>
    <div>
      <RouterView />

      <!-- name view -->
      <RouterView name="sidebar"  />
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

nav a.exact-active-class {
  background-clip: green;
}
</style>
