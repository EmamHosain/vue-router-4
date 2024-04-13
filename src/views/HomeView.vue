<script setup>

</script>

<template>
  <main>
    <h1>home page</h1>
    <div v-for="item in 20" :key="item">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis blanditiis deleniti dicta hic
        nemo fuga harum dolores repellendus, dolorum earum possimus velit adipisci facilis delectus itaque sed accusantium
        dolore ratione temporibus error eum soluta repudiandae quis? Delectus nostrum minus nobis repellat nesciunt
        laboriosam, numquam error tempora quia a molestias modi officia quos laborum! Nam adipisci dolore id similique!
        Enim, nihil aperiam. Officiis deleniti a rerum doloribus dicta, placeat atque cumque, laborum est, repellat sint
        inventore nostrum blanditiis. Delectus maiores ad facilis tempore culpa temporibus aperiam minima sunt ipsum
        eligendi distinctio blanditiis nisi fugit, error dolorem corrupti atque enim. Quibusdam.</p>
    </div>
    <h1> <router-link to="/about">go to about</router-link></h1>
    <div v-for="item in 10" :key="item">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis blanditiis deleniti dicta hic
        nemo fuga harum dolores repellendus, dolorum earum possimus velit adipisci facilis delectus itaque sed accusantium
        dolore ratione temporibus error eum soluta repudiandae quis? Delectus nostrum minus nobis repellat nesciunt
        laboriosam, numquam error tempora quia a molestias modi officia quos laborum! Nam adipisci dolore id similique!
        Enim, nihil aperiam. Officiis deleniti a rerum doloribus dicta, placeat atque cumque, laborum est, repellat sint
        inventore nostrum blanditiis. Delectus maiores ad facilis tempore culpa temporibus aperiam minima sunt ipsum
        eligendi distinctio blanditiis nisi fugit, error dolorem corrupti atque enim. Quibusdam.</p>
    </div>
  </main>
</template>
