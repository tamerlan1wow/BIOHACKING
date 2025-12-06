<template>
   <main class="flex flex-col flex-grow justify-center items-center bg-no-repeat bg-cover bg-center" 
   style="background-image: url('/images/Protected.jpg'); background-size: cover; height: 100vh;">
   <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-5xl mb-12 border-2 border-white border-opacity-20">
      <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6 text-center tracking-tight">
          <p>THIS IS <span class="text-black">PROTECTED</span> PAGE</p>
          <p>Please, log in with <span class="text-black">GITHUB</span> for using this site!</p>
        </h1>
    </div>
    <p class="text-white mt-4 font-semibold justify-center">© 2025 Tamerlan's web-site. All rights reserved.</p>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    authenticatedOnly: true,
    navigateUnauthenticatedTo: '/login',
  },
})
</script>

<style scoped>
main {
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}


</style>

  