<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Toolbar from './components/Toolbar.vue'
import EventWindow from './views/EventWindow.vue'
import { useCounterStore } from '@/stores/counter'
import { useEventsList } from './stores/events'
import { useCategoriesList } from './stores/categories'
import { useGlobalStore } from './stores/state.js'

const categories = useCategoriesList();
const events = useEventsList();
const viewStage = useGlobalStore()
async function setStores() {
  await events.dispatchGetEvents()
    .then(data => { console.log(data.success); events.$patch({ events: data.content }); return data }).then(data => { data.success ? console.log("Yes", data) : console.log("Nope, failed") })
  await categories.dispatchGetCategories()
    .then(data => { console.log(data); categories.$patch({ categories: data.content }) })
}

setStores();
</script>

<template>
  <header>
    <Toolbar />
    <div class="logo">MUNTIL CALENDAR</div>
    <button @click="viewStage.$patch({ viewState: 'default' })">DEFAULT</button>
    <button @click="viewStage.$patch({ viewState: 'add' })">ADD</button>
    {{ viewStage.viewState }}
  </header>
  <Suspense>
  <RouterView />
  <template #fallback>
    <div><h3>Waiting on data</h3></div>
  </template>
  </Suspense>
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
