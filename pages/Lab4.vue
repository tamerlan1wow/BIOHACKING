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
            Nutrition <span class="text-emerald-600 font-normal">Optimization</span>
          </h1>
          <p class="text-xl text-gray-600 text-center max-w-2xl leading-relaxed">
            Fuel your biology with precision, science, and intention
          </p>
        </div>
      </div>

      <!-- Основной контент в карточках с легкой тенью -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Левая карточка - Наука питания -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">The Science of Fuel</h2>
                <div class="w-16 h-0.5 bg-emerald-200 rounded-full"></div>
              </div>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nutritional biohacking is the practice of using food and supplements as precise tools 
                to optimize biological functions. It moves beyond basic nutrition to targeted enhancement.
              </p>
              <p>
                By understanding how specific nutrients affect <span class="text-emerald-600 font-medium">gene expression, hormone levels, 
                and cellular function</span>, we can strategically shape our biology for peak performance.
              </p>
            </div>
          </div>
        </div>

        <!-- Правая карточка - Ключевые принципы -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">Key Principles</h2>
                <div class="w-16 h-0.5 bg-teal-200 rounded-full"></div>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="item in [
                'Chrononutrition - eating aligned with circadian rhythms',
                'Nutrigenomics - how food affects gene expression',
                'Microbiome optimization through prebiotics and probiotics',
                'Targeted supplementation based on individual biomarkers'
              ]" :key="item" class="flex items-center">
                <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Секция с протоколами -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="text-center mb-10">
          <div class="inline-flex flex-col items-center">
            <div class="w-32 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 rounded-full mb-6"></div>
            <h2 class="text-3xl font-semibold text-gray-900 mb-3">Essential Protocols</h2>
            <p class="text-gray-600 max-w-md mx-auto">
              Select a protocol to explore its principles and implementation
            </p>
          </div>
        </div>

        <!-- Кнопки выбора протоколов -->
        <div class="flex flex-wrap justify-center gap-4 mb-10">
          <button
            v-for="protocol in protocols"
            :key="protocol.name"
            @click="selectedProtocol = protocol.name"
            :class="[
              'group relative overflow-hidden',
              'px-5 py-3 rounded-xl',
              'transition-all duration-300 transform hover:-translate-y-1',
              'border',
              selectedProtocol === protocol.name 
                ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' 
                : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300 hover:shadow-md'
            ]"
          >
            <span class="relative z-10 font-medium tracking-wide">{{ protocol.name }}</span>
            <div v-if="selectedProtocol === protocol.name" 
                 class="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
          </button>
        </div>

        <!-- Отображение выбранного протокола -->
        <div v-if="selectedProtocol" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <!-- Изображение -->
            <div class="md:w-2/5">
              <div class="relative overflow-hidden rounded-xl shadow-md">
                <img 
                  :src="selectedImage" 
                  class="w-full h-64 object-cover"
                  :alt="selectedProtocol"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
            
            <!-- Описание -->
            <div class="md:w-3/5">
              <div class="mb-4">
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">{{ selectedProtocol }}</h3>
                <div class="w-20 h-1 bg-emerald-400 rounded-full"></div>
              </div>
              
              <p class="text-gray-700 leading-relaxed">
                {{ getProtocolDescription(selectedProtocol) }}
              </p>
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

interface Protocol {
  name: string,
  image: string
}

const protocols = reactive<Protocol[]>([
  { name: 'Intermittent Fasting', image: '/images/fasting.avif'},
  { name: 'Ketogenic Diet', image: '/images/keto.jpg' },
  { name: 'Nutrient Timing', image: '/images/timing.jpg' },
  { name: 'Microbiome Optimization', image: '/images/microbiome.avif' },
  { name: 'Anti-Inflammatory Foods', image: '/images/anti-inflammatory.jpg' },
  { name: 'Phytonutrient Density', image: '/images/phytonutrients.jpg' }
])

const selectedProtocol = ref<string>('Intermittent Fasting')

const selectedImage = computed(() => {
  return protocols.find(protocol => protocol.name === selectedProtocol.value)?.image || ''
})

const getProtocolDescription = (protocolName: string): string => {
  const descriptions: Record<string, string> = {
    'Intermittent Fasting': 'Cycling between periods of eating and fasting to optimize metabolic health, cellular repair, and hormone regulation. This approach can improve insulin sensitivity and promote autophagy.',
    'Ketogenic Diet': 'A high-fat, low-carbohydrate diet that shifts the body into ketosis, using fat as primary fuel. Supports cognitive function, weight management, and metabolic flexibility.',
    'Nutrient Timing': 'Strategic consumption of specific nutrients at optimal times to maximize absorption, performance, and recovery. Aligns food intake with circadian rhythms and activity levels.',
    'Microbiome Optimization': 'Cultivating a diverse gut microbiome through prebiotic fibers, probiotic foods, and fermented products. Essential for immune function, digestion, and neurotransmitter production.',
    'Anti-Inflammatory Foods': 'Focusing on foods rich in omega-3s, antioxidants, and polyphenols to reduce systemic inflammation, supporting joint health, recovery, and longevity.',
    'Phytonutrient Density': 'Prioritizing colorful vegetables and fruits rich in plant compounds that support cellular protection, DNA repair, and oxidative stress defense.'
  }
  return descriptions[protocolName] || 'Learn more about this nutritional protocol.'
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