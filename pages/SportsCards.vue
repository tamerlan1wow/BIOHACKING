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
            Supplements <span class="text-emerald-600 font-normal">Optimization</span>
          </h1>
          <p class="text-xl text-gray-600 text-center max-w-2xl leading-relaxed">
            Precision supplementation for targeted biological enhancement
          </p>
        </div>
      </div>

      <!-- Основной контент в карточках с легкой тенью -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Левая карточка - Наука добавок -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">Science of Supplementation</h2>
                <div class="w-16 h-0.5 bg-emerald-200 rounded-full"></div>
              </div>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Supplementation involves using specific compounds to enhance biological functions, fill nutritional gaps, 
                and optimize physiological processes beyond what diet alone can achieve.
              </p>
              <p>
                Modern supplements are backed by scientific research and designed for targeted effects, 
                from <span class="text-emerald-600 font-medium">cognitive enhancement</span> to improved recovery and longevity.
              </p>
            </div>
          </div>
        </div>

        <!-- Правая карточка - Ключевые категории -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">Key Categories</h2>
                <div class="w-16 h-0.5 bg-teal-200 rounded-full"></div>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="item in [
                'Nootropics - Cognitive enhancement and brain health',
                'Adaptogens - Stress resistance and hormonal balance',
                'Performance Enhancers - Strength, endurance, and recovery',
                'Longevity Compounds - Cellular health and anti-aging',
                'Nutrient Optimization - Filling dietary gaps and deficiencies'
              ]" :key="item" class="flex items-center">
                <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Секция с добавками -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="text-center mb-10">
          <div class="inline-flex flex-col items-center">
            <div class="w-32 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 rounded-full mb-6"></div>
            <h2 class="text-3xl font-semibold text-gray-900 mb-3">Essential Supplements</h2>
            <p class="text-gray-600 max-w-md mx-auto">
              Select a supplement to learn about its benefits and applications
            </p>
          </div>
        </div>

        <!-- Кнопки выбора добавок -->
        <div class="flex flex-wrap justify-center gap-4 mb-10">
          <button
            v-for="supplement in supplements"
            :key="supplement.name"
            @click="selectedSupplement = supplement.name"
            :class="[
              'group relative overflow-hidden',
              'px-5 py-3 rounded-xl',
              'transition-all duration-300 transform hover:-translate-y-1',
              'border',
              selectedSupplement === supplement.name 
                ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' 
                : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300 hover:shadow-md'
            ]"
          >
            <span class="relative z-10 font-medium tracking-wide">{{ supplement.name }}</span>
            <div v-if="selectedSupplement === supplement.name" 
                 class="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
          </button>
        </div>

        <!-- Отображение выбранной добавки -->
        <div v-if="selectedSupplement" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <!-- Изображение -->
            <div class="md:w-2/5">
              <div class="relative overflow-hidden rounded-xl shadow-md">
                <img 
                  :src="selectedImage" 
                  class="w-full h-64 object-cover"
                  :alt="selectedSupplement"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
            
            <!-- Описание -->
            <div class="md:w-3/5">
              <div class="mb-4">
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">{{ selectedSupplement }}</h3>
                <div class="w-20 h-1 bg-emerald-400 rounded-full"></div>
              </div>
              
              <p class="text-gray-700 leading-relaxed mb-4">
                {{ getSupplementDescription(selectedSupplement) }}
              </p>
              
              <!-- Дополнительная информация -->
              <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="bg-emerald-50 rounded-lg p-3">
                  <p class="text-sm text-gray-600 mb-1">Primary Benefit</p>
                  <p class="font-medium text-gray-900">{{ getSupplementBenefit(selectedSupplement) }}</p>
                </div>
                <div class="bg-emerald-50 rounded-lg p-3">
                  <p class="text-sm text-gray-600 mb-1">Recommended Timing</p>
                  <p class="font-medium text-gray-900">{{ getSupplementTiming(selectedSupplement) }}</p>
                </div>
              </div>
            </div>
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
import { ref, computed, reactive } from 'vue'

interface Supplement {
  name: string,
  image: string
}

const supplements = reactive<Supplement[]>([
  { name: 'Omega-3', image: '/images/omega3.jpg' },
  { name: 'Vitamin D3', image: '/images/vitamind.jpg' },
  { name: 'Magnesium', image: '/images/magnesium.avif' },
  { name: 'Probiotics', image: '/images/probiotics.webp' },
  { name: 'Zinc', image: '/images/zinc.jpg' },
  { name: 'Vitamin C', image: '/images/vitaminc.jpg' }
])

const selectedSupplement = ref<string>('Omega-3')

const selectedImage = computed(() => {
  return supplements.find(supplement => supplement.name === selectedSupplement.value)?.image || ''
})

const getSupplementDescription = (supplementName: string): string => {
  const descriptions: Record<string, string> = {
    'Omega-3': 'Essential fatty acids that support brain function, reduce inflammation, and promote heart health. Omega-3s, particularly EPA and DHA, are crucial for cognitive function, joint health, and cardiovascular protection.',
    'Vitamin D3': 'A fat-soluble vitamin that functions as a hormone in the body. Essential for calcium absorption, immune system function, bone health, and mood regulation. Many people are deficient due to limited sun exposure.',
    'Magnesium': 'A mineral involved in over 300 biochemical reactions in the body. Supports muscle and nerve function, energy production, sleep quality, and stress management. Different forms serve different purposes.',
    'Probiotics': 'Beneficial bacteria that support gut microbiome balance, digestive health, immune function, and nutrient absorption. Different strains target different health concerns.',
    'Zinc': 'An essential mineral that supports immune function, wound healing, DNA synthesis, and cell division. Important for hormone production and maintaining sense of taste and smell.',
    'Vitamin C': 'A powerful antioxidant that supports immune function, collagen production, iron absorption, and skin health. Also plays a role in neurotransmitter synthesis.'
  }
  return descriptions[supplementName] || 'Learn more about this supplement.'
}

const getSupplementBenefit = (supplementName: string): string => {
  const benefits: Record<string, string> = {
    'Omega-3': 'Brain & Heart Health',
    'Vitamin D3': 'Immune & Bone Support',
    'Magnesium': 'Relaxation & Recovery',
    'Probiotics': 'Gut Health Balance',
    'Zinc': 'Immune Function',
    'Vitamin C': 'Antioxidant Protection'
  }
  return benefits[supplementName] || 'Health Support'
}

const getSupplementTiming = (supplementName: string): string => {
  const timings: Record<string, string> = {
    'Omega-3': 'With meals',
    'Vitamin D3': 'Morning with fat',
    'Magnesium': 'Evening',
    'Probiotics': 'Empty stomach',
    'Zinc': 'Between meals',
    'Vitamin C': 'Any time'
  }
  return timings[supplementName] || 'As directed'
}
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