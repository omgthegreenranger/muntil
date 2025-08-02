<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Toolbar from './components/Toolbar.vue'
import EventWindow from './views/EventWindow.vue'
import { useCounterStore } from '@/stores/counter'
import { useEventsList } from './stores/events'
import { useCategoriesList } from './stores/categories'
const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()

// const eventList = useEventsList();
// eventList.initEvents;
// eventList.dispatchCreateEvent({ name: 'test event',
//   due: 1991919111,
//   description: "short description",
//   urgency: 1,
//   event_range_low: 0,
//   event_range_low_title: "",
//   event_range_med: 0,
//   event_range_med_title: "",
//   event_range_high: 0,
//   event_range_high_title: "",
//   catId: 2,
//   userId: 1} );
// const catList = useCategoriesList();
// catList.dispatchCreateCategory;

</script>

<template>
  <header>
    <Toolbar />
    <div class="logo">MUNTIL CALENDAR</div>
  </header>
      <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
