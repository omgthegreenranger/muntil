<script setup lang="ts">
  // const props = defineProps<{
  //   stage: stage;
  // }>()
  // import { RouterLink, RouterView } from 'vue-router'
  import ViewEvents from '@/components/events/ListEvents.vue'
  import AddEditEvent from '@/components/events/AddEditEvent.vue';
  import ViewOneEvent from '@/components/events/OneEvent.vue';
  import { useEventsList } from '@/stores/events';
  import { useViewStore } from '@/stores/state'
  
  const events = useEventsList();
  const viewStage = useViewStore();
  const eventsList: string[] = events.dispatchGetEvents().then(data => console.log(data));
  
  </script>

<template>
  <div class="greetings">
  <div v-if="viewStage.viewState === 'default'">
    <ViewEvents eventList = "eventsList" />
  </div>

    <!-- <div v-else-if="viewStage.viewState === 'add'"><AddEditEvent stage="add" /></div>
    <div v-if="viewStage.viewState === 'one'"><ViewOneEvent /></div>
    <div v-if="viewStage.viewState === 'default'"><AddEditEvents stage="edit" /></div> -->
  </div>
  
  <div>
    
  </div>
</template>

<style scoped>
</style>