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
  <figure class="flex flex-col rounded-sm bg-white md:flex-row md:p-8">
    <img
      class="h-40"
      :src="`api/${tour.img}`"
      alt=""
      loading="lazy"
    />
    <div class="p-4 space-y-4">
      <section aria-labelledby="information-heading">
        <div class="flex justify-between">
          <h2 class="text-primary font-bold">{{ tour.title }}</h2>
          <ShareSocial class="hidden md:block" />
        </div>

        <p>
          <span class="text-base font-semibold md:text-primary">
            {{ tour.calification }}/10
          </span>
          <span class="text-sm">
            {{ tour.opinions }} opiniones
            <span class="hidden md:block">| {{ tour.travelers }} viajeros</span>
          </span>
        </p>
      </section>
      <blockquote>
        <p
          class="text-base hidden md:block"
          v-html="tour.description"
        />
      </blockquote>
      <figcaption class="flex justify-between">
        <ShareSocial class="md:hidden" />
        <p
          v-if="tour.price > 0"
          class="flex items-center gap-2"
        >
          <span class="text-sm text-green-600">(-{{ tour.discount }}&)</span>
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
      </figcaption>
    </div>
  </figure>
</template>

<style lang="css" scoped>
h2 {
  font-size: 22px;
}
</style>
