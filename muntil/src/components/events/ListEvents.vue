<script setup lang="ts">
const props  = defineProps<{
   eventsList: String[];
}>()
// import { useEventsList } from '@/stores/events';
import UrgencyBlock from '@/components/events';

// const eventList = await useEventsList().dispatchGetEvents();
console.log(props.eventsList)


</script>

<template>
    <div>
        <h1>LIST EVENTS</h1>
        <h3>This is the component that will list more than one event - it will show all urgencies and single urgencies.</h3>
        
    </div>
</template>
<!-- <style scoped>
</style> -->