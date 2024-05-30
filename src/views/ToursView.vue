<script setup>
import TourCard from '@/components/TourCard.vue'
import axios from 'axios'
import { ref } from 'vue'

const tours = ref()
axios.get('api/data/tours.json').then(r => {
  tours.value = r.data
})
</script>

<template>
  <div>
    <TourCard
      v-for="(tour, idx) in tours"
      :key="idx"
      :tour="tour"
      class="m-4 md:m-8"
    />
  </div>
</template>
