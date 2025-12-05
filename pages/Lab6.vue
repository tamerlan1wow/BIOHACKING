<template>
  <main class="min-h-screen bg-black">
    <div class="relative container mx-auto px-4 py-12 max-w-5xl">
      
      <!-- Заголовок -->
      <div class="mb-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Exercise <span class="text-emerald-500">Optimization</span>
        </h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Practical training methods for better performance
        </p>
      </div>

      <!-- Основная секция с фото -->
      <div class="bg-gray-900 rounded-xl p-6 mb-12 border border-gray-800">
        <div class="flex flex-col md:flex-row gap-8 items-start">
          
          <!-- Левая колонка - фото и загрузка -->
          <div class="md:w-1/2">
            <!-- Основное фото -->
            <div class="relative overflow-hidden rounded-lg mb-6">
              <img 
                src="/images/exercise-main.jpg" 
                alt="Training methods"
                class="w-full h-64 object-cover"
              />
            </div>
            
            <!-- Загрузка фото -->
            <div>
              <p class="text-gray-300 mb-3 font-medium">Add your training photo:</p>
              <div class="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  @change="handleFileUpload"
                  class="block w-full text-sm text-gray-300
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:text-sm file:font-medium
                         file:bg-emerald-600 file:text-white
                         hover:file:bg-emerald-700
                         cursor-pointer"
                />
                
                <!-- Превью загруженного фото -->
                <div v-if="uploadedImage" class="mt-4">
                  <div class="relative overflow-hidden rounded-lg border border-gray-700">
                    <img 
                      :src="uploadedImage" 
                      alt="Your uploaded photo"
                      class="w-full h-48 object-cover"
                    />
                    <button
                      @click="uploadedImage = null"
                      class="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Правая колонка - принципы -->
          <div class="md:w-1/2">
            <h2 class="text-2xl font-bold text-white mb-6">Training Principles</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-emerald-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-emerald-400">1</span>
                </div>
                <div>
                  <h3 class="font-medium text-white mb-1">Progressive Overload</h3>
                  <p class="text-gray-400 text-sm">
                    Gradually increase exercise intensity to stimulate muscle growth and strength gains.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-emerald-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-emerald-400">2</span>
                </div>
                <div>
                  <h3 class="font-medium text-white mb-1">Proper Form</h3>
                  <p class="text-gray-400 text-sm">
                    Maintain correct technique for maximum effectiveness and injury prevention.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-emerald-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-emerald-400">3</span>
                </div>
                <div>
                  <h3 class="font-medium text-white mb-1">Recovery</h3>
                  <p class="text-gray-400 text-sm">
                    Allow adequate time for muscle repair and adaptation between training sessions.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-emerald-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-emerald-400">4</span>
                </div>
                <div>
                  <h3 class="font-medium text-white mb-1">Consistency</h3>
                  <p class="text-gray-400 text-sm">
                    Regular training yields better long-term results than sporadic intense sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Методы тренировок -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
          
          <h3 class="text-lg font-medium text-white mb-2">Strength Training</h3>
          <p class="text-gray-400 text-sm">
            Build muscle mass and increase strength through resistance exercises.
          </p>
        </div>
        
        <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
         
          <h3 class="text-lg font-medium text-white mb-2">Cardio</h3>
          <p class="text-gray-400 text-sm">
            Improve cardiovascular health and endurance with aerobic activities.
          </p>
        </div>
        
        <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">

          <h3 class="text-lg font-medium text-white mb-2">HIIT</h3>
          <p class="text-gray-400 text-sm">
            High-intensity interval training for efficient calorie burn and fitness improvement.
          </p>
        </div>
      </div>

      <!-- Футер -->
      <div class="text-center pt-8 border-t border-gray-800">
        <p class="text-gray-500">
          © 2025 Exercise Optimization • Tamerlan and Darkhan
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  auth: {
    unauthenticatedOnly: false
  },
})

const uploadedImage = ref<string | null>(null)

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    const reader = new FileReader()
    
    reader.onload = (e) => {
      uploadedImage.value = e.target?.result as string
    }
    
    reader.readAsDataURL(file)
  }
}
</script>

<style scoped>
/* Минимальные анимации */
main {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Простой скроллбар */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #374151;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4b5563;
}
</style>