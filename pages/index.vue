<template>
    <div class="text-center">
      <h1 class="text-4xl font-bold mt-10">HELLO</h1>
      <p class="mt-4">This is the home page.</p>

    </div>
    <img src = "/images/THRAGG.jpg" class = "center">
  </template>
<style scoped>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>


  <script setup lang="ts">
  definePageMeta({
      auth: {
          unauthenticatedOnly: false,
          navigateAuthenticatedTo: '/protected'
      },
  })
  const {data} = await useFetch('/api/me')
  </script>
    