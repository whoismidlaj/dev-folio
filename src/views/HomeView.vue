<script setup>
import Social from "../components/Social.vue";
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const data = ref({});
  const isLoading = ref(true);
  
  const fetchData = () => {
    axios
      .get('/data.json')
      .then(response => {
        data.value = response.data;
        isLoading.value = false;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        isLoading.value = false;
      });
  };
  
  onMounted(fetchData);
</script>

<template>
  <div class="h-screen flex flex-col justify-end py-20">
    <div class="pb-32">
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-12">
        Design is Thinking<br />Made Visual.
      </h1>

      <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-xl mb-6 md:mb-12">
        <p class="md:pe-6 md:border-r-2 border-primary">UI / UX</p>
        <p class="md:pe-6 md:border-r-2 border-primary">
          Branding and Visual Designs
        </p>
        <p>Web Design</p>
      </div>

      <div class="flex flex-col md:flex-row gap-8 justify-between">
        <div class="flex border-2 border-primary w-fit text-lg font-semibold">
          <RouterLink to="/works" class="group bg-primary text-black py-2 px-8"
            >Projects<i
              class="fa-sharp fa-solid fa-arrow-right ps-2 transition-all duration-100 ease-linear group-hover:translate-x-2"
            ></i></RouterLink>
            <a v-if="isLoading" href="#" class="py-2 px-5">Resume</a>
            <a v-else target="_blank" :href="data.resume" class="py-2 px-5">Resume</a>
        </div>

        <Social />
      </div>
    </div>
  </div>
</template>
