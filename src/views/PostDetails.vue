<script setup>
import { useRouter } from "vue-router";

const router = useRouter();


// console.log('from post details page',router);


function goBack() {
    router.back();
}
</script>
<template>
    <div>
        <h1>post details page | <button @click="goBack">back</button></h1>
        <!-- <h2>post id : {{ route.params.id }}</h2> -->
        <h2>post id : {{ router.currentRoute.value.params.id }}</h2>
        <h2>post title : {{ router.currentRoute.value.params.slug }}</h2>
    </div>
</template>