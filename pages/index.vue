<template>
  <main class="min-h-screen bg-white">
    <!-- Фон -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
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
      <!-- Заголовок -->
      <div class="mb-16 pt-8 text-center">
        <div class="w-24 h-1 bg-emerald-600 mb-6 rounded-full mx-auto"></div>
        <h1 class="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
          Bio<span class="text-emerald-600 font-normal">hacking</span> Hub
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Optimizing human potential through science and nature
        </p>
      </div>

      <!-- Две карточки -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
            <h2 class="text-2xl font-semibold text-gray-900 mb-2">Historical Roots</h2>
            <div class="w-16 h-0.5 bg-emerald-200 mb-6"></div>

            <p class="text-gray-700 leading-relaxed mb-4">
              Emerging from the <span class="text-emerald-600 font-medium">DIY biology movement</span> in the early 2000s,
              biohacking represents the democratization of biological optimization.
            </p>

            <p class="text-gray-700 leading-relaxed">
              What began as grassroots experimentation evolved into a discipline merging
              <span class="text-emerald-600 font-medium">nutritional science</span>,
              <span class="text-emerald-600 font-medium">wearable tech</span>,
              and <span class="text-emerald-600 font-medium">data-driven wellness</span>.
            </p>
          </div>
        </div>

        <div class="group">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
            <h2 class="text-2xl font-semibold text-gray-900 mb-2">Cultural Impact</h2>
            <div class="w-16 h-0.5 bg-teal-200 mb-6"></div>

            <p class="text-gray-700 mb-4">
              Biohacking has quietly reshaped global wellness culture:
            </p>

            <ul class="space-y-3">
              <li class="flex items-center tuxt">
                <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Quantified Self movement & biometric awareness
              </li>
              <li class="flex items-center tuxt">
                <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Cold exposure & thermal regulation practices
              </li>
              <li class="flex items-center tuxt">
                <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Smart supplementation & cognitive optimization
              </li>
              <li class="flex items-center tuxt">
                <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Wearable integration for real-time feedback
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Цитата -->
      <div class="max-w-3xl mx-auto mb-16">
        <div class="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100 relative">
          <div class="text-4xl text-emerald-200 mb-4">"</div>

          <blockquote class="text-2xl text-gray-700 leading-relaxed mb-6 italic">
            True biohacking isn't about radical transformation, but about understanding  
            and gently optimizing your biology's natural potential.
          </blockquote>

          <p class="text-lg font-medium text-emerald-600">Tim Ferriss</p>
          <p class="text-gray-500 text-sm mt-2">Author & Biohacking Advocate</p>
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
// Нет логики — страница статичная
</script>

<style scoped>
main {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 3px;
}

.tuxt {
  color: #1f2937;
  position: relative;
  z-index: 10;
}

::-webkit-scrollbar-thumb:hover {
  background: #059669;
}
</style>
