<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useMoviesStore } from '@/stores/movies';
import router from '@/router';

import Header from '@/components/Header.vue'

const route = useRoute()
const moviesStore = useMoviesStore();

const funcBookingMovie = (id) => {
  router.push(`/${id}/booking`)
}

onMounted(() => {
  moviesStore.getMovie(route.params.id);
})

</script>

<template>
  <div>
    <Header :to="'/'" />
    <div class="h-[150px] flex items-end flex-col justify-end pb-4 px-6 bg-cyan-600 text-white">
      <b>Rating:</b>
      <div class="flex items-center"><font-awesome-icon icon="fa-solid fa-star" class="mr-1 text-yellow-400" size="lg"
          fixed-width /> {{ moviesStore.movie?.imdbRating }}</div>
    </div>
    <div class="flex px-6">
      <figure class="w-1/2 border-4 p-2 -mt-20 shrink-0 mr-4">
        <img :src="moviesStore.movie?.Poster" class="w-full" alt="">
      </figure>
      <div class="flex flex-col gap-2 pt-4">
        <span><b>Rated</b>: {{ moviesStore.movie?.Rated }}</span>
        <span><b>Released</b>: {{ moviesStore.movie?.Released }}</span>
        <span><b>Duration</b>: {{ moviesStore.movie?.Runtime }}</span>
        <span><b>Language</b>: {{ moviesStore.movie?.Language }}</span>
        <span><b>Country</b>: {{ moviesStore.movie?.Country }}</span>
      </div>
    </div>
    <div class="px-6 mt-4">
      <h5 class="text-4xl font-semibold mb-6">{{ moviesStore.movie?.Title }}</h5>
    </div>
    <div v-if="moviesStore.movie?.Genre" class="flex justify-center my-3 py-1 bg-slate-300 gap-6 px-4">
      <span v-for="genre in moviesStore.movie?.Genre.split(', ')" class="text-gray-700">
        {{ genre }}
      </span>
    </div>
    <p class="text-justify indent-8 px-6 mt-4">
      {{ moviesStore.movie?.Plot }}
    </p>
    <button @click.prevent="funcBookingMovie(route.params.id)"
      class="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 bg-cyan-600 text-white py-2 px-4 rounded">Book</button>
  </div>
</template>