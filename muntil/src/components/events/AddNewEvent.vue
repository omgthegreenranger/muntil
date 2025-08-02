<script setup lang="ts">
import { useEventsList } from '@/stores/events';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const eventList = useEventsList().dispatchGetEvents();
const categoryList: Array<string> = []


</script>

<template>
    <form>
        <div>
            <label>Event Name: </label>
            <input v-model="text">
        </div>
        <div>
            <label>Due date</label>
            <VueDatePicker v-model="date" />
        </div>
        <div>
            <label>Description: </label>
            <textarea v-model="message" />
        </div>
        <div>
            <label>Category: </label>
            <select v-model="selected">
                <option disabled value="">Select category</option>
                {{ categoryList }}
            </select>
        </div>
          <!-- event_range_low: number;
  event_range_low_title: string;
  event_range_med: number;
  event_range_med_title: string;
  event_range_high: number;
  event_range_high_title: string; -->


        <div>
            <button>Add Event</button>
        </div>
    </form>
</template>


  eventId: number;
  name: string;
  due: number;
  description: string;
  urgency: number;
  event_range_low: number;
  event_range_low_title: string;
  event_range_med: number;
  event_range_med_title: string;
  event_range_high: number;
  event_range_high_title: string;
  catId: number;
  userId: number;