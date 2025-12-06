export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // 👉 ВАЖНО: Netlify НЕ поддерживает SSR Nuxt → нужен SPA
  ssr: false,

  // 👉 ВАЖНО: Говорим Nuxt генерировать полностью статический сайт
  nitro: {
    preset: 'netlify-static'
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  // Можно удалить, если GitHub Auth не используется
  runtimeConfig: {
    public: {
      GITHUB_ID: process.env.GITHUB_ID,
      GITHUB_SECRET: process.env.GITHUB_SECRET,
    },
  },
})
