<template>
  <header class="flex flex-row w-full items-center justify-between bg-[#FB3640] border-b-2 border-black-400 text-xl text-black relative max-sm:justify-between">
    
   
    <div class="px-4 py-2 flex items-center">
      <img src="/public/images/circle.png" alt="Logo" class="w-16 h-16 bg-transparent">
    </div>

   
    <nav :class="{
      'flex flex-row items-center justify-end gap-4 basis-2/3': !burger || burger,
      'max-sm:absolute max-sm:top-full max-sm:left-0 max-sm:w-full max-sm:flex-col max-sm:gap-0 max-sm:bg-white max-sm:px-0': burger,
      'max-sm:hidden': !burger
    }">
      <NuxtLink to="/" class="links max-sm:w-full max-sm:text-center">Home</NuxtLink>
      <NuxtLink to="/protected" class="links max-sm:w-full max-sm:text-center">Protected</NuxtLink>
      
      
      <div class="relative">
        <button @click="toggleLabs" class="links max-sm:w-full max-sm:text-center">
          Labs
        </button>
        <div v-if="labsOpen" class="flex flex-col absolute top-full bg-white text-black w-56 text-center max-sm:relative max-sm:w-full max-sm:bg-red-100">
          <NuxtLink to="/Lab3" class="p-2 border-b-2 border-black hover:bg-[#22577A] hover:text-yellow-300">Lab3</NuxtLink>
          <NuxtLink to="/Lab4" class="p-2 border-b-2 border-black hover:bg-[#22577A] hover:text-yellow-300">Lab4</NuxtLink>
          <NuxtLink to="/Lab5" class="p-2 border-b-2 border-black hover:bg-[#22577A] hover:text-yellow-300">Lab5</NuxtLink>
          <NuxtLink to="/Lab6" class="p-2 border-b-2 border-black hover:bg-[#22577A] hover:text-yellow-300">Lab6</NuxtLink>
        </div>
      </div>

      <NuxtLink to="/login" class="links max-sm:w-full max-sm:text-center">LogIn</NuxtLink>
      <div class="links max-sm:w-full max-sm:text-center" @click="signOut()">LogOut</div>
      <img :src="data?.user?.image" v-show="log_check" class="w-14 h-14 border-2 border-black rounded-full max-sm:mx-auto" />
    </nav>

    
    <div @click="switch_burger" class="max-sm:flex max-sm:flex-col max-sm:mr-4 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6 hidden sm:hidden">
      <span class="h-[3px] w-full bg-blue-950" :class="burger ? 'rotate-45 relative top-[9px]' : ''"></span>
      <span class="h-[3px] w-full bg-blue-950" :class="burger ? 'opacity-0' : ''"></span>
      <span class="h-[3px] w-full bg-blue-950" :class="burger ? 'rotate-[-45deg] relative bottom-3' : ''"></span>
    </div>
  </header>

  <main class="min-h-screen p-5 bg-[#F8F7F2] text-black flex">
    <div class="m-auto w-full">
      <slot />
    </div>
  </main>

  <footer class="flex flex-row w-full bg-[#FB3640] border-t-2 border-gray-400 items-center justify-center px-4 py-2 gap-4">
    <a href="https://t.me/tamerverse"><img src="/images/Telegram_logo.svg.webp" class="w-16 h-16" /></a>
    <a href="https://github.com/"><img src="/images/github.png" class="w-16 h-16" /></a>
    <a href="https://www.facebook.com"><img src="/images/Facebook.png" class="w-16 h-16 bg-transparent" /></a>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const burger = ref<boolean>(false)
const labsOpen = ref<boolean>(false)

const switch_burger = () => {
  burger.value = !burger.value
}

const toggleLabs = () => {
  labsOpen.value = !labsOpen.value
}


const { signOut, status } = useAuth()
const log_check = computed(() => status.value === 'authenticated')
const { data } = await useFetch('/api/me')


useHead({
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-YM1HZ1JLP4",
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YM1HZ1JLP4');
      `,
      type: "text/javascript"
    }
  ]
})
</script>

<style scoped>
.links {
  @apply p-2 rounded-md hover:bg-[#22577A] hover:text-yellow-300;
}
</style>
