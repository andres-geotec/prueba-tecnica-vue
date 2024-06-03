<script setup>
import { ref } from 'vue'

const redes = [
  {
    url: 'https://www.facebook.com',
    name: 'Facebook',
  },
  {
    url: 'https://twitter.com',
    name: 'Twitter',
  },
  {
    url: 'https://www.linkedin.com',
    name: 'LinkedIn',
  },
]

const isOpen = ref(false)

function close() {
  setTimeout(() => (isOpen.value = false), 1000)
}
</script>

<template>
  <div
    class="relative"
    @mouseleave="close"
  >
    <button
      type="button"
      class="text-base text-primary"
      @click="isOpen = !isOpen"
    >
      Compartir
    </button>
    <div
      class="absolute bg-white z-10 shadow-lg ring-1 ring-gray-900/5 flex flex-col transition-transform duration-200"
      :class="{
        'opacity-100 translate-y-0 ease-out': isOpen,
        'opacity-0 translate-y-1 ease-in duration-150': !isOpen,
      }"
    >
      <a
        v-for="(red, idx) in redes"
        :key="idx"
        class="hover:bg-gray-50 p-2"
        :href="red.url"
        target="_blank"
        rel="noopener noreferrer"
        :style="!isOpen ? 'display: none;' : ''"
      >
        {{ red.name }}
      </a>
    </div>
  </div>
</template>
