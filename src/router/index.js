import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Detail from "@/views/DetailView.vue";
import Booking from "@/views/BookingView.vue";
import History from "@/views/HistoryView.vue";

const routes = [
  {
    meta: {
      title: "Home",
    },
    path: "/",
    name: "home",
    component: Home,
  },
  {
    meta: {
      title: "Detail",
    },
    path: "/:id",
    name: "detail",
    component: Detail,
  },
  {
    meta: {
      title: "Booking",
    },
    path: '/:id/booking',
    name: 'booking',
    component: Booking
  },
  {
    meta: {
      title: "History",
    },
    path: '/history',
    name: 'history',
    component: History
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _form, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
