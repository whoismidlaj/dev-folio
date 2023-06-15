<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import BottomBar from "./components/BottomBar.vue";
</script>

<template>
    <main class="max-w-screen-xl mx-auto px-5 relative">
        <Header />
        <RouterView />
        <BottomBar />
    </main>
</template>
