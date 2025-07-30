<script setup lang="ts">
  const props = defineProps<{
      stage: string
  }>()
  // import { RouterLink, RouterView } from 'vue-router'
  import AllEvents from '@/components/events/AllEvents.vue'
  import EventUrgency from '@/components/events/EventUrgency.vue';
  
  // var display_stage: string;
  // switch (props.stage) {
  //   default :
  //     display_stage =
  // }
</script>

<template>
  <div class="greetings">
    <AllEvents />
  </div>
</template>

<style scoped>
</style>