<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

</script>

<template>
  <header class="relative">
    <div class="fixed top-0 left-0 w-full bg-black">
      <div class="flex justify-between max-w-screen-xl mx-auto px-5 py-5">
        <div class="flex items-center gap-3 md:gap-5 z-50">
          <!-- <img class="w-14" src="../assets/logo.png" /> -->
          <a href="/" class="text-xl md:text-3xl font-black">DevFolio</a>
        </div>
        <div class="hidden md:flex items-center gap-10 font-semibold text-xl">
          <!-- <router-link !to="/about">About.</router-link> -->
          <RouterLink
            :class="{ 'opacity-75': $route.path === '/about' }"
            to="/about"
            >About.</RouterLink
          >
          <RouterLink
            :class="{ 'opacity-75': $route.path === '/works' }"
            to="/works"
            >Works.</RouterLink
          >
          <a href="#">Blog.</a>
          <RouterLink
            :class="{ 'opacity-75': $route.path === '/contact' }"
            to="/contact"
            >Contact.</RouterLink
          >
        </div>
        <button
          @click="toggleMenu"
          class="flex items-center text-2xl md:hidden"
          id="menuOpen"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 flex items-center justify-start p-5 bg-black"
    >
      <div class="fixed top-0 left-0 w-full bg-black">
        <div class="flex justify-between max-w-screen-xl mx-auto px-5 py-5">
          <div class="flex items-center gap-3 md:gap-5 z-50">
            <!-- <img class="w-14" src="../assets/logo.png" /> -->
            <a href="/" class="text-xl md:text-3xl font-black"
              >DevFolio</a
            >
          </div>
          <button
            @click="toggleMenu"
            class="flex items-center text-2xl md:hidden"
            id="menuOpen"
          >
            <i class="fa-solid fa-times"></i>
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-6 font-semibold text-4xl text-white">
        <RouterLink @click="toggleMenu" class="text-primary" to="/about"
          >About</RouterLink
        >
        <RouterLink @click="toggleMenu" class="text-primary" to="/works"
          >Works</RouterLink
        >
        <a @click="toggleMenu" href="#" class="text-primary"
          >Blog</a
        >
        <RouterLink @click="toggleMenu" class="text-primary" to="/contact"
          >Contact</RouterLink
        >
      </div>
    </div>
  </header>
</template>