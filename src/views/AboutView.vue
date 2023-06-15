<script setup>
import Social from '../components/Social.vue';
</script>

<template>
  <div class="py-32 lg:h-screen flex flex-col justify-center lg:py-10">

    <div class="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 md:gap-10 lg:gap-64">

      <div class="col-span-1">
        <h1 class="text-5xl font-bold mb-10">About.</h1>
        <img class="w-48 md:w-64 lg:w-full mb-10" src="../assets/alfin.webp" />
        <Social />
      </div>

      <div class="col-span-2">
        <p class="text-md md:text-xl lg:text-2xl font-normal leading-normal mb-3">I'm <b>Alfin K Mathew</b>, I am a UI/UX designer and visual
          designer with a passion for creating intuitive and visually appealing digital experiences, I strive to craft
          designs that strike the perfect balance between aesthetics and functionality.
        </p>
        <p class="text-md md:text-xl lg:text-2xl font-normal leading-normal">Throughout my career, I have had the opportunity to work on various projects,
          collaborating with
          cross-functional teams to deliver exceptional user-centered designs. I excel in conducting user research,
          gathering insights, and translating them into meaningful design solutions. By employing industry best practices,
          I ensure that my designs not only meet the users' needs but also align with the clients' objectives.
        </p>
      </div>

    </div>

  </div>
</template>
