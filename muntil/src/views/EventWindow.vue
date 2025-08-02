<script setup lang="ts">
  // const props = defineProps<{

  // }>()
  // import { RouterLink, RouterView } from 'vue-router'
  import AllEvents from '@/components/events/ListEvents.vue'
  import AddNewEvent from '@/components/events/AddNewEvent.vue';
  import EventUrgency from '@/components/events/OneEvent.vue';
  import { useEventsList } from '@/stores/events';
  
  // var display_stage: string;
  // switch (props.stage) {
  //   default :
  //     display_stage =
  // }
  const events = useEventsList();
</script>

<template>
  <AddNewEvent />
  <div class="greetings">
  <AllEvents />
  </div>
  
  <div>
    
  </div>
</template>

<style scoped>
</style>