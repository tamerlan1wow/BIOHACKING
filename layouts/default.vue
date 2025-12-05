<template>
  <header class="fixed top-0 left-0 w-full z-30 flex items-center justify-between bg-[#121212] border-y-[7px] border-[#4CAF50] text-xl text-white h-[100px] px-4">
    
    <div class="flex items-center w-1/3">
      <img src="/public/images/TAMERLAN-DARKHAN-06-12-2025.png" alt="Logo" class="w-80 h-50 bg-transparent max-sm:w-40 max-sm:h-8">
    </div>

    <div @click="switch_burger" class="sm:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-40">
      <span class="h-[3px] w-full bg-white transition-all duration-150" :class="burger ? 'rotate-45 translate-y-[9px]' : ''"></span>
      <span class="h-[3px] w-full bg-white transition-all duration-150" :class="burger ? 'opacity-0' : ''"></span>
      <span class="h-[3px] w-full bg-white transition-all duration-150" :class="burger ? '-rotate-45 -translate-y-[9px]' : ''"></span>
    </div>

    <nav class="hidden sm:flex justify-center items-center gap-0 w-1/3">
      <NuxtLink to="/" class="group bg-[#121212] min-w-[70px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] active:bg-[#2E7D32] transition-colors duration-150">Home</NuxtLink>
      
      <div class="relative">
        <button @click="toggleLabs" class="group bg-[#121212] min-w-[70px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] active:bg-[#2E7D32] transition-colors duration-150">Topics</button>
        <div v-if="labsOpen" class="absolute top-full mt-1 left-0 flex flex-col bg-[#1c1c1c] text-white w-56 text-center shadow-lg z-10">
          <NuxtLink to="/Lab4" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] transition-colors duration-150">Nutrition</NuxtLink>
          <NuxtLink to="/Lab5" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] transition-colors duration-150">Sleep</NuxtLink>
          <NuxtLink to="/Lab6" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] transition-colors duration-150">Exercise</NuxtLink>
          <NuxtLink to="/SportsCards" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] transition-colors duration-150">Supplements</NuxtLink>
        </div>
      </div>
      <NuxtLink to="/Lab3" class="group bg-[#121212] min-w-[70px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] active:bg-[#2E7D32] transition-colors duration-150">BIOAPP</NuxtLink>
    </nav>

    <div class="hidden sm:flex items-center justify-end gap-4 w-1/3">
      <!-- Убрали Protected / LogIn / LogOut -->
    </div>

    <div
      v-if="burger"
      class="sm:hidden fixed inset-0 bg-[#1c1c1c] z-20 flex flex-col justify-center items-center gap-4 text-center text-xl"
    >
      <NuxtLink to="/" class="links w-full text-white">Home</NuxtLink>

      <div class="w-full flex flex-col items-center">
        <button @click="toggleLabs" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] transition-colors duration-150 w-56">Topics</button>
        <div v-if="labsOpen" class="flex flex-col mt-2 bg-[#1c1c1c] w-full max-w-56">
          <NuxtLink to="/Lab4" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] transition-colors duration-150">Nutrition</NuxtLink>
          <NuxtLink to="/Lab5" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] transition-colors duration-150">Sleep</NuxtLink>
          <NuxtLink to="/Lab6" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] transition-colors duration-150">Exercise</NuxtLink>
          <NuxtLink to="/SportsCards" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] transition-colors duration-150">Supplements</NuxtLink>
        </div>
      </div>
      <NuxtLink to="/Lab3" class="group bg-[#121212] min-w-[60px] h-[60px] text-white font-bold
    flex flex-row items-center justify-center hover:text-black hover:bg-[#4CAF50] active:bg-[#2E7D32] transition-colors duration-150">BIOAPP</NuxtLink>
    </div>
  </header>

  <main class="pt-[80px] min-h-screen w-full bg-[#0F1114] text-white flex-1 flex">
    <div class="w-full">
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const burger = ref<boolean>(false)
const labsOpen = ref<boolean>(false)

const switch_burger = () => {
  burger.value = !burger.value
}

const toggleLabs = () => {
  labsOpen.value = !labsOpen.value
}

watch(burger, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})
</script>

<style scoped>
.links {
  @apply p-2 rounded-md hover:bg-[#4CAF50] hover:text-black;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #0F1114;
  color: white;
}
</style>