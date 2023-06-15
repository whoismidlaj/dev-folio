<script setup>
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
    <div>
      <div v-if="isLoading">
        <div class="flex items-center gap-5 text-lg">
        <a
          href="#"
          class="flex justify-center items-center w-10 h-10 border-2 border-primary hover:bg-primary hover:text-black"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="#"
          class="flex justify-center items-center w-10 h-10 border-2 border-primary hover:bg-primary hover:text-black"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="#"
          class="flex justify-center items-center w-10 h-10 border-2 border-primary hover:bg-primary hover:text-black"
        >
          <i class="fa-brands fa-behance"></i>
        </a>
      </div>
    </div>
      <div v-else class="flex items-center gap-5 text-lg">
        <a
          target="_blank"
          :href="data.socialMedia.behance"
          class="flex justify-center items-center w-10 h-10 border-2 border-primary hover:bg-primary hover:text-black"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          target="_blank"
          :href="data.socialMedia.instagram"
          class="flex justify-center items-center w-10 h-10 border-2 border-primary hover:bg-primary hover:text-black"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          target="_blank"
          :href="data.socialMedia.linkedin"
          class="flex justify-center items-center w-10 h-10 border-2 border-primary hover:bg-primary hover:text-black"
        >
          <i class="fa-brands fa-behance"></i>
        </a>
      </div>
    </div>
  </template>
  