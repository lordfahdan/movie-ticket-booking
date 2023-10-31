<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMoviesStore } from '@/stores/movies.js';

import Header from '@/components/Header.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';

const router = useRouter();
const moviesStore = useMoviesStore();

const funcToHistory = () => {
  router.push('/history')
}

onMounted(() => {
  moviesStore.getMovies();
})

</script>

<template>
  <div class="mx-6 py-20">
    <Header />
    <List>
      <ListItem :movies="moviesStore.movies" />
    </List>

    <button @click.prevent="funcToHistory()"
      class="fixed bottom-4 left-1/2 -translate-x-1/2 w-11/12 browser:w-[550px] bg-cyan-600 text-white py-2 px-4 rounded">History</button>
  </div>
</template>