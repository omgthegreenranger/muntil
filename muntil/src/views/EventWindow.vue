<script setup lang="ts">
// const props = defineProps<{
//   categories: string[];
// }>()
// import { RouterLink, RouterView } from 'vue-router'
import { onBeforeMount, onMounted, toRaw, toRefs, toRef } from 'vue';
import ViewEvents from '@/components/events/ListEvents.vue'
import AddEditEvent from '@/components/events/AddEditEvent.vue';
import ViewOneEvent from '@/components/events/OneEvent.vue';
import { useEventsList } from '@/stores/events';
import { useGlobalStore } from '@/stores/state'

const viewStage = useGlobalStore();
async function eventsByUrgency() {
  const eventPayload = await useEventsList();
  // const result = await useEventsList().sortByUrgency();

  // console.log(await result)
  console.log(toRefs(eventPayload).events)
  return (toRefs(eventPayload).events)}
// const urgencyList = await eventsByUrgency();

console.log(await eventsByUrgency()) 

</script>

<template>
    <div class="greetings">
      <div v-if="viewStage.viewState === 'default'">
        <ViewEvents />
      </div>
      <!-- <div v-else-if="viewStage.viewState === 'add'"><AddEditEvent stage="add" /></div> -->
    <!-- <div v-if="viewStage.viewState === 'one'"><ViewOneEvent /></div> -->
    <!-- <div v-if="viewStage.viewState === 'default'"><AddEditEvents stage="edit" /></div> -->
        <!-- <template #fallback>
          <div>
            <h3>Waiting on Events</h3>
          </div>
        </template> -->
      </div>
</template>

<style scoped></style>