<script setup>
import ShareSocial from './ShareSocial.vue'

defineProps({
  tour: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <figure class="flex flex-col rounded-sm bg-white md:flex-row md:p-6">
    <img
      class="object-cover h-40 w-auto md:w-100"
      :src="`api/${tour.img}`"
      alt=""
      loading="lazy"
    />
    <figcaption class="space-y-4 p-4 md:p-0 md:pl-4">
      <div aria-labelledby="information-heading">
        <div class="flex justify-between">
          <h2 class="text-primary font-bold">{{ tour.title }}</h2>
          <ShareSocial class="hidden md:block" />
        </div>

        <p class="flex space-x-2">
          <span class="text-base font-semibold md:text-primary">
            {{ tour.calification }}/10
          </span>
          <span>{{ tour.opinions }} opiniones</span>
          <span class="hidden md:block">|</span>
          <span class="hidden md:block">{{ tour.travelers }} viajeros</span>
        </p>
      </div>
      <p
        class="text-base hidden md:block"
        v-html="tour.description"
      />
      <div class="flex justify-between md:justify-end">
        <ShareSocial class="md:hidden" />
        <p
          v-if="tour.price > 0"
          class="flex items-center gap-2"
        >
          <span class="text-sm text-green-600">(-{{ tour.discount }}%)</span>
          <span class="text-2xl text-primary font-bold">
            {{ tour.price }} €
          </span>
        </p>
        <p
          v-else
          class="text-2xl text-primary font-bold"
        >
          ¡Gratis!
        </p>
      </div>
    </figcaption>
  </figure>
</template>

<style lang="css" scoped>
h2 {
  font-size: 22px;
}
</style>
