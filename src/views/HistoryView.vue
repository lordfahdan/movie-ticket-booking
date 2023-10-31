<script setup>
import Header from '@/components/Header.vue';
import { useBookingStore } from '@/stores/booking.js';

const bookingStore = useBookingStore();
</script>

<template>
  <Header to="/" />
  <div class="px-4">
    <ul v-if="bookingStore.history && bookingStore.history.length > 0" class="list-none pt-20 pb-6">
      <li v-for="(item, index) in bookingStore.history" class="mb-4" :key="'history' + index">
        <div class="flex gap-6">
          <figure class="p-2 w-1/4 shrink-0 border-4 rounded overflow-hidden border-gray-400">
            <img :src="item.movie.Poster" class="h-full w-full object-cover">
          </figure>
          <div class="pt-2">
            <h5 class="font-bold text-2xl mb-2">{{ item.movie.Title }}</h5>
            <p class="text-lg text-gray-600"><b>Seat{{ item.seats.length > 1? 's' : '' }}</b>: {{ item.seats.join(', ') }}</p>
          </div>
        </div>
      </li>
    </ul>
    <div v-else class="flex h-screen items-center justify-center">
      <p class="text-center my-2 text-gray-400 italic">history not found</p>
    </div>
  </div>
</template>