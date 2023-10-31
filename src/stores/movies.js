import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';
import axios from 'axios';

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    movie: {},
  }),
  actions: {
    getMovies() {
      const url = import.meta.env.VITE_API_URL;
      const params = {
        apikey: import.meta.env.VITE_API_KEY,
        s: 'battle',
        type: 'movie',
        y: '2023',
        page: '1',
      };

      axios
        .get(url, { params })
        .then((result) => {
          const response = result.data;
          this.movies = response.Search;
        })
        .catch((err) => {
          toast.error(err.message, {
            autoClose: 1500,
            pauseOnHover: false,
          });
        });
    },

    getMovie(id) {
      this.movie = {}
      const url = import.meta.env.VITE_API_URL;
      const params = {
        apikey: import.meta.env.VITE_API_KEY,
        i: id,
        plot: 'full',
      }
      axios
        .get(url, { params })
        .then((result) => {
          const response = result.data
          this.movie = response
        }).catch((err) => {
          alert(err.message)
        });
    }
  },
});
