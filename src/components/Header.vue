<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  to: {
    type: String,
    default: null
  }
})

const router = useRouter()

const goBack = (route) => {
  router.push(route)
}
</script>

<template>
  <nav class="fixed left-1/2 top-0 -translate-x-1/2 w-[600px] py-4 bg-cyan-600">
    <span v-if="props.to" class="absolute left-4 top-1/2 -translate-y-1/2 text-white cursor-pointer" @click="goBack(props.to)">
      <font-awesome-icon icon="fa-solid fa-arrow-left-long" size="lg" />
    </span>
    <h5 class="font-bold text-center text-3xl text-white">MTB</h5>
  </nav>
</template>