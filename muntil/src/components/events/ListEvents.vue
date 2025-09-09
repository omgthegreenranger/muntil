<script setup lang="ts">
// const props  = defineProps<{
//    eventsList: String[];
// }>()
// import UrgencyBlock from '@/components/events';
import { ref, watch, computed } from 'vue';
import { useEventsList } from '@/stores/events';
import { useCategoriesList } from '@/stores/categories';
import { useGlobalStore } from '@/stores/state';

const globalState = useGlobalStore();
// const eventList = await useEventsList()
const catList = useCategoriesList();



// async function events() { await eventList} 
const eventView = globalState.eventState
const cats = catList


// const eventsByUrgency = events().then((data) => { Object.groupBy(events, ({ urgency }) =>
//     console.log(events.$id))})

// console.log(await eventsByUrgency)

</script>

<template #default>
    <select v-model="globalState.eventState">
        <option value='all'>All</option>
        <option value='per-urgency'>By Urgency</option>
    </select>
    {{ globalState.eventState }}
    <div v-if="globalState.eventState === 'all'">
    <!-- <div v-for="urgency in eventsByUrgency" :key="urgency.urgency"> -->
        <!-- {{ urgency.urgency }} -->
        <!-- <div v-for="event in eventList.events" :key="event.urgency">
            <ul>
                <li>{{ event.name }}</li>
                <li>{{ event.due }}</li>
                <li>{{ event.description }}</li>
                <li>{{ event.urgency }}</li>
                <li>{{ event.due }}</li>
            </ul>
        </div> -->
    <!-- </div> -->
    </div>
    <div v-if="globalState.eventState === 'per-urgency'">
        <h1>LIST EVENTS</h1>
        <h3>This is the component that will list more than one event - it will show all urgencies and single urgencies.
        </h3>
    </div>

</template>
<style scoped>
ul {
    border-width: 5px;
    border-color: black;
}
</style>