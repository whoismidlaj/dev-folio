<script setup>
import Social from '../components/Social.vue';
</script>

<template>
  <div class="py-32 lg:h-screen flex flex-col justify-center lg:py-10">

    <div class="grid grid-cols-1 lg:grid-cols-3 items-start gap-10 md:gap-10 lg:gap-64">

      <div class="col-span-1">
        <h1 class="text-5xl font-bold mb-10">About.</h1>
        <Social />
      </div>

      <div class="col-span-2">
        <p class="text-md md:text-xl lg:text-2xl font-normal leading-normal mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ducimus fugiat error nisi, totam similique tempora quidem quibusdam dignissimos, quaerat vel deserunt tenetur expedita corrupti? Non aliquid debitis laboriosam voluptatem fugiat odio reiciendis corporis voluptas.
        </p>
        <p class="text-md md:text-xl lg:text-2xl font-normal leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate deleniti voluptatibus illum eius rerum, nobis quasi et architecto id optio ut fugiat iusto officiis excepturi sed, vero, eos itaque.
        </p>
      </div>

    </div>

  </div>
</template>
