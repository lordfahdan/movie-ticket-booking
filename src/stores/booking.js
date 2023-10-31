import { defineStore } from 'pinia';
import { getDataFromLocalStorage } from '@/utils';
import { HISTORY_KEY } from '@/constants';

export const useBookingStore = defineStore('booking', {
  state: () => ({
    history: getDataFromLocalStorage(HISTORY_KEY) ?? [],
  }),
  actions: {
    addHistory(payload) {
      this.history.push(payload);
    },
  },
});
