<script setup>
import ImageError from '@/assets/img/imgerror.jpeg';

const props = defineProps({
  movies: {
    type: Array,
    default: [],
  }
})

const handleImgError = (e) => {
  e.target.src = ImageError
}
</script>

<template>
  <li v-for="(movie, index) in movies" :key="'movie' + index">
    <router-link :to="'/' + movie.imdbID">
      <figure class="h-[60vw] browser:h-[230px] w-full border-4 border-slate-500 rounded mb-1">
        <img class="h-full w-full object-cover object-center" :src="movie.Poster" :alt="movie.Title"
          @error="handleImgError">
      </figure>
      <span>{{ movie.Title }}</span>
    </router-link>
  </li>
</template>