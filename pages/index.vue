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
            Bio<span class="text-emerald-600 font-normal">hacking</span> Hub
          </h1>
          <p class="text-xl text-gray-600 text-center max-w-2xl leading-relaxed">
            Optimizing human potential through science and nature
          </p>
        </div>
      </div>

      <!-- Основной контент в карточках с легкой тенью -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Левая карточка - Исторические корни -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">

              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">Historical Roots</h2>
                <div class="w-16 h-0.5 bg-emerald-200 rounded-full"></div>
              </div>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Emerging from the <span class="text-emerald-600 font-medium">DIY biology movement</span> in the early 2000s, 
                biohacking represents the democratization of biological optimization.
              </p>
              <p>
                What began as grassroots experimentation has evolved into a sophisticated discipline 
                blending <span class="text-emerald-600 font-medium">nutritional science, wearable technology,</span> and 
                <span class="text-emerald-600 font-medium">data-driven wellness protocols.</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Правая карточка - Культурное влияние -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">Cultural Impact</h2>
                <div class="w-16 h-0.5 bg-teal-200 rounded-full"></div>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              Biohacking has quietly reshaped global wellness culture:
            </p>
            <div class="space-y-3">
              <div v-for="item in [
                'Quantified Self movement & biometric awareness',
                'Cold exposure & thermal regulation practices',
                'Smart supplementation & cognitive optimization',
                'Wearable integration for real-time feedback'
              ]" :key="item" class="flex items-center">
                <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Цитата в минималистичном стиле -->
      <div class="max-w-3xl mx-auto mb-16">
        <div class="relative">
          <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent to-emerald-300"></div>
          <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-px bg-gradient-to-l from-transparent to-emerald-300"></div>
          
          <div class="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
            <div class="text-4xl text-emerald-200 mb-4">"</div>
            <blockquote class="text-2xl text-gray-700 leading-relaxed mb-6 font-light italic">
              True biohacking isn't about radical transformation, but about understanding 
              and gently optimizing your biology's natural potential.
            </blockquote>
            <div class="flex items-center justify-center">
              <div class="w-16 h-px bg-emerald-200 mr-4"></div>
              <p class="text-lg font-medium text-emerald-600">Tim Ferriss</p>
              <div class="w-16 h-px bg-emerald-200 ml-4"></div>
            </div>
            <p class="text-gray-500 text-sm mt-2">Author & Biohacking Advocate</p>
          </div>
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

import { useEngStore } from '~/stores/eng'
import { ref, computed, onMounted } from 'vue'

const engStore = useEngStore()
const selected = ref('American Football') // Установка значения по умолчанию

const filteredSport = computed(() => {
  return engStore.eng.find(item => item.name === selected.value)
})

const getTemp = (name: string): string => {
  if (name === 'American Football') return engStore.temp_S1
  if (name === 'Basketball') return engStore.temp_S2
  if (name === 'Baseball') return engStore.temp_S3
  if (name === 'Ice Hockey') return engStore.temp_GOD
  if (name === 'Soccer') return engStore.temp_INT
  return ''
}

const getWind = (name: string): string => {
  if (name === 'American Football') return engStore.wind_S1
  if (name === 'Basketball') return engStore.wind_S2
  if (name === 'Baseball') return engStore.wind_S3
  if (name === 'Ice Hockey') return engStore.wind_GOD
  if (name === 'Soccer') return engStore.wind_INT
  return ''
}

onMounted(() => {
  engStore.weather_S1()
  engStore.weather_S2()
  engStore.weather_S3()
  engStore.weather_GOD()
  engStore.weather_INT()

  setInterval(() => {
    engStore.weather_S1()
    engStore.weather_S2()
    engStore.weather_S3()
    engStore.weather_GOD()
    engStore.weather_INT()
  }, 5000)
})
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

/* Эффект при наведении на кнопки */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Плавное появление деталей */
.fade-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
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