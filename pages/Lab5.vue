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
            Sleep <span class="text-emerald-600 font-normal">Optimization</span>
          </h1>
          <p class="text-xl text-gray-600 text-center max-w-2xl leading-relaxed">
            Master your circadian rhythm for optimal recovery and performance
          </p>
        </div>
      </div>

      <!-- Основной контент в карточках с легкой тенью -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Левая карточка - Наука сна -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">The Science of Sleep</h2>
                <div class="w-16 h-0.5 bg-emerald-200 rounded-full"></div>
              </div>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sleep is the most powerful biohacking tool available. It's during sleep that your body performs 
                <span class="text-emerald-600 font-medium">cellular repair, memory consolidation, and hormone regulation</span>.
              </p>
              <p>
                Quality sleep enhances cognitive function, emotional regulation, physical recovery, 
                and is directly linked to longevity and disease prevention.
              </p>
            </div>
          </div>
        </div>

        <!-- Правая карточка - Принципы оптимизации сна -->
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div class="flex items-start mb-6">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-2">Sleep Optimization Principles</h2>
                <div class="w-16 h-0.5 bg-teal-200 rounded-full"></div>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="item in [
                'Circadian rhythm alignment with natural light exposure',
                'Sleep environment optimization (temperature, darkness, noise)',
                'Digital detox 1-2 hours before bedtime',
                'Consistent sleep-wake schedule maintenance',
                'Strategic napping for cognitive enhancement'
              ]" :key="item" class="flex items-center">
                <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Секция со стадиями сна -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="text-center mb-10">
          <div class="inline-flex flex-col items-center">
            <div class="w-32 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 rounded-full mb-6"></div>
            <h2 class="text-3xl font-semibold text-gray-900 mb-3">Sleep Cycle Optimization</h2>
            <p class="text-gray-600 max-w-md mx-auto">
              Understanding and optimizing your sleep architecture for maximum recovery
            </p>
          </div>
        </div>

        <!-- Описание стадий сна -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Стадия 1 -->
            <div class="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 class="text-lg font-semibold text-emerald-800 mb-3">Light Sleep (N1)</h3>
              <p class="text-gray-700 text-sm">
                Transition phase between wakefulness and sleep. Body begins to relax, brain produces theta waves.
                Lasts 5-10 minutes per cycle.
              </p>
            </div>
            
            <!-- Стадия 2 -->
            <div class="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 class="text-lg font-semibold text-emerald-800 mb-3">Deep Sleep (N3)</h3>
              <p class="text-gray-700 text-sm">
                Crucial for physical restoration, growth hormone release, and cellular repair. 
                Immune system strengthening occurs during this phase.
              </p>
            </div>
            
            <!-- Стадия 3 -->
            <div class="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 class="text-lg font-semibold text-emerald-800 mb-3">REM Sleep</h3>
              <p class="text-gray-700 text-sm">
                Associated with dreaming, memory consolidation, and emotional processing. 
                Brain activity resembles waking state, essential for learning and creativity.
              </p>
            </div>
          </div>
          
          <div class="mt-8 pt-6 border-t border-gray-200">
            <p class="text-gray-700 text-center">
              Complete sleep cycles (approximately 90 minutes each) are essential for optimal cognitive 
              function and physical recovery. Aim for 5-6 full cycles per night.
            </p>
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