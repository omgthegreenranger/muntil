<script setup lang="ts">
// const props  = defineProps<{
//    eventsList: String[];
// }>()
// import { useEventsList } from '@/stores/events';
import UrgencyBlock from '@/components/events';
import { useEventsList } from '@/stores/events';
import { useCategoriesList } from '@/stores/categories';

const eventList = useEventsList()
const catList = useCategoriesList();
const events = await eventList.events
const cats = catList.$state
console.log(events, cats.categories )
</script>

<template #default>
    <div>
        <h1>LIST EVENTS</h1>
        <h3>This is the component that will list more than one event - it will show all urgencies and single urgencies.</h3>
        <ul v-for="event in events">
        <li>{{ event.name }}</li> 
        <li>{{ event.due }}</li>
        <li>{{ event.description }}</li>
        <li>{{ event.urgency }}</li>
        <li>{{ event.due }}</li>
        <li></li>
        </ul>
    </div>
</template>
<style scoped>
ul {
    border-width: 5px;
    border-color: black;
}
</style>