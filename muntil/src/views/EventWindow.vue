<script setup lang="ts">
// const props = defineProps<{
//   stage: stage;
// }>()
// import { RouterLink, RouterView } from 'vue-router'
import ViewEvents from '@/components/events/ListEvents.vue'
import AddEditEvent from '@/components/events/AddEditEvent.vue';
import ViewOneEvent from '@/components/events/OneEvent.vue';
// import { useEventsList } from '@/stores/events';
import { useViewStore } from '@/stores/state'

// const events = useEventsList();
const viewStage = useViewStore();
// const eventsList = await events.dispatchGetEvents()
// events.dispatchGetEvents()
//   .then(data => {console.log(data.content);       events.$patch({event: data.content}); return data.content })
//   .then(data => data.map(t => {

//   }))

</script>

<template>
    <div class="greetings">
      <div v-if="viewStage.viewState === 'default'">
          <Suspense>
        <ViewEvents />
        <!-- <div v-else-if="viewStage.viewState === 'add'"><AddEditEvent stage="add" /></div>
    <div v-if="viewStage.viewState === 'one'"><ViewOneEvent /></div>
    <div v-if="viewStage.viewState === 'default'"><AddEditEvents stage="edit" /></div> -->
        <template #fallback>
          <div>
            <h3>Waiting on Events</h3>
          </div>
        </template>
          </Suspense>
      </div>
    </div>
</template>

<style scoped></style>