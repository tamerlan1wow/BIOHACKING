<template>
  <main class="min-h-screen bg-white">
    <!-- Фон с органическими текстурами -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/20 to-white"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"></div>
      
      <!-- Органические линии -->
      <svg class="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100" stroke="#059669" fill="none" stroke-width="2"/>
        <path d="M0,300 C200,400 400,200 600,300 C800,400 1000,200 1200,300" stroke="#059669" fill="none" stroke-width="2"/>
      </svg>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
      <!-- Заголовок в стиле минимализма -->
      <div class="mb-16 pt-8">
        <div class="flex flex-col items-center">
          <div class="w-24 h-1 bg-emerald-600 mb-6 rounded-full"></div>
          <h1 class="text-5xl md:text-6xl font-light text-gray-900 mb-4 text-center tracking-tight">
            Bio<span class="text-emerald-600 font-normal">App</span>
          </h1>
          <p class="text-xl text-gray-600 text-center max-w-2xl leading-relaxed">
            Visualize your optimized self through biohacking
          </p>
        </div>
      </div>

      <!-- Основной контент в карточках с легкой тенью -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Левая карточка - Что такое BioApp -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">What is BioApp?</h2>
                <div class="w-16 h-0.5 bg-emerald-200 rounded-full"></div>
              </div>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                BioApp is an innovative tool that shows you how you could look and feel 
                through <span class="text-emerald-600 font-medium">biohacking optimization</span>.
              </p>
              <p>
                Using AI-powered simulation, it visualizes realistic improvements in 
                <span class="text-emerald-600 font-medium">cognitive function, physical performance, 
                and overall wellbeing</span> achievable through science-backed protocols.
              </p>
            </div>
          </div>
        </div>

        <!-- Правая карточка - Как это работает -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">How It Works</h2>
                <div class="w-16 h-0.5 bg-teal-200 rounded-full"></div>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="item in [
                'Analyzes your current biometrics and lifestyle',
                'Projects realistic enhancements through biohacking',
                'Provides personalized optimization recommendations',
                'Shows visual transformations based on data'
              ]" :key="item" class="flex items-center">
                <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Секция с объектным распознаванием -->
      <div class="max-w-3xl mx-auto mb-16">
        <div class="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
          <h2 class="text-3xl font-semibold text-gray-900 mb-8">
            Experience BioApp Now
          </h2>
          
          <div class="mb-8">
            <main class="flex flex-col items-center">
              <div class="relative w-full max-w-lg">
                <Detection />
              </div>
            </main>
          </div>
          
          <p class="text-gray-600 mt-6 leading-relaxed">
            BioApp analyzes your environment to provide tailored biohacking recommendations. 
            See how small, consistent changes could lead to significant improvements in your 
            health and performance.
          </p>
        </div>
      </div>


      <!-- Футер -->
      <div class="text-center pt-8 border-t border-gray-200">
        <p class="text-gray-600">
          © 2025 Tamerlan and Darkhan 
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: false
  },
})

const { data } = await useFetch('/api/me')
</script>

<style scoped>
/* Плавные анимации */
main {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Стили для скроллбара */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #059669;
}
</style>