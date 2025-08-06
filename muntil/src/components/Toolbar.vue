<script setup lang="ts">
  const props = defineProps<{
    //   RouterLink: RouterLink
  }>()
  import { RouterLink } from 'vue-router'
  import { useViewStore } from '../stores/state.js'
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/account">Account</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
        <RouterLink to="/login">Log-in/Log-out</RouterLink>
        <RouterLink to="/support">Help</RouterLink>
    </nav>
</template>

<style scoped>
    div {
        display: flex;
        padding: 3px;
        
        flex-direction: row;
    }

    nav {
        font-family:'Times New Roman', Times, serif;
        font-size:larger;
    }

</style>