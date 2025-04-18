<template>
    <div class= 'flex flex-col p-4 border-2 border-red-600'>
      <button class = 'rounded-xl bg-[#22577A] min-w-[250px] h-[60px] text-black font-bold
      flex flex-row items-center justify-center hover:text-yellow-500 hover:bg-red-600' @click = "signIn('github', {callbackUrl: '/'})">
    <img src = "/images/git.png" class="mr-2 bg-transparent w-10 h-10">SigIn with GitHUB</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/protected'
    },
})

const {signIn} = useAuth()

</script>
  