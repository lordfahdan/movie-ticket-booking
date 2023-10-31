<script setup>
import axios from 'axios';
import { reactive, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useBookingStore } from '@/stores/booking.js';
import Header from '@/components/Header.vue';
import { BOOKING_SEAT, HISTORY_KEY } from '@/constants';
import { setDataToLocalStorage } from '@/utils';
import { useMoviesStore } from '@/stores/movies';

const route = useRoute();
const router = useRouter();
const bookingStore = useBookingStore();
const moviesStore = useMoviesStore();

const state = reactive({
  seats: BOOKING_SEAT,
  selected: [],
  totalTicket: 1,
})
const totalSelected = computed(() => state.selected.length)

const funcSeletSeat = (label) => {
  if (state.selected.indexOf(label) !== -1) return state.selected.splice(state.selected.indexOf(label), 1);
  state.selected.push(label)
}

const funcSelectedSeat = (label) => {
  return state.selected.indexOf(label) !== -1
}

const funcSubmitBooking = () => {
  if (totalSelected.value > state.totalTicket) return toast.error('The number of seats selected exceeds the total booking limit!', {
    autoClose: 1500,
    pauseOnHover: false,
  });

  if (totalSelected.value < state.totalTicket) return toast.error('The number of seats selected is less than the total booking!', {
    autoClose: 1500,
    pauseOnHover: false,
  });

  const payload = {
    movie: moviesStore.movie,
    seats: state.selected
  }

  bookingStore.addHistory(payload)
  router.replace('/history')
}

watch(
  () => state.totalTicket,
  () => {
    state.selected = []
  }
)

watch(
  bookingStore.history,
  () => {
    setDataToLocalStorage(HISTORY_KEY, bookingStore.history)
  },
  { deep: true }
)

onMounted(() => {
  moviesStore.getMovie(route.params.id)
})
</script>

<template>
  <div class="pt-20 px-4">
    <Header :to="`/${route.params.id}`" />
    <div class="grid grid-cols-5 gap-2 mobile-320:gap-4 mobile-480:gap-6 browser:gap-8 mt-6">
      <div v-for="(seat, index) in state.seats" class="border-4 border-gray-700 rounded-sm py-1 text-center select-none"
        :class="[
          index === 0 ? 'col-span-5 mb-4 py-4' : '',
          seat.active === false ? 'opacity-40' : 'cursor-pointer',
          funcSelectedSeat(seat.label) ? 'bg-green-400' : ''
        ]" @click="funcSeletSeat(seat.label)">
        <span class="text-gray-700 font-semibold text-xl">{{ seat.label }}</span>
      </div>
    </div>

    <div class="absolute bottom-6 left-4 right-4 py-4 flex gap-4 items-center">
      <select name="total-ticket" id="total-ticket"
        class="border-2 border-gray-400 rounded px-3 py-1 text-xl cursor-pointer" v-model="state.totalTicket">
        <option v-for="n in 5" :value="n">{{ n }}</option>
      </select>
      <button @click.prevent="funcSubmitBooking"
        class="w-full bg-cyan-600 text-white text-xl py-[11px] rounded">Select</button>
    </div>
  </div>
</template>