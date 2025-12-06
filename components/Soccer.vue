<template>
    <div class = 'flex gap-2'>
        <div v-for = "item in filtering" :key = "item.id" class = 'flex flex-row gap-4'>
        <img :src = item.img class = 'w-22 h-40'>
        <div class = 'flex flex-col'>
            <p>Sport: {{ item.name }}</p>
            <p>Year of founding: {{ item.year }}</p>
            <p>Creator: {{ item.director }}</p>
            <p>Average Temperature at the stadium: {{ engStore.temp_S1 }} &deg;C</p>                
            <p>Average Wind speed at the stadium: {{engStore.wind_S1 }} m/sec</p>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useEngStore } from '~/stores/eng'
import { ref, computed, onMounted } from 'vue'

const engStore = useEngStore()

const filtering = computed(()=> {
    return engStore.eng.filter(movie => movie.name == 'Soccer')
})

onMounted(() => {
    engStore.weather_INT()

    setInterval(()=>{engStore.weather_INT()}, 5000)
})

</script>