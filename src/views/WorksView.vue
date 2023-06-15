<script setup>
import Social from '../components/Social.vue';

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
    <div class="h-screen flex flex-col justify-center py-10">

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-64">

            <div class="col-span-1">
                <h1 class="text-5xl font-bold mb-5 md:mb-10">Works.</h1>
                <Social />
            </div>

            <div v-if="isLoading" class="col-span-2">
                <div class="grid grid-rows-3 gap-5 md:gap-7">
                    <a href="#" class="group flex items-center gap-5 border-2 border-primary p-5 md:p-6">
                        <span
                            class="hidden md:flex justify-center items-center w-10 h-10 text-lg font-bold bg-primary text-black group-hover:text-primary group-hover:border-2 group-hover:border-primary group-hover:bg-black">1</span>
                        <h4 class="text-lg md:text-xl font-bold">UI / UX Projects</h4>
                        <span
                            class="flex justify-center items-center ms-auto w-10 h-10 group-hover:w-fit text-md md:text-lg font-bold bg-primary text-black">
                            <i class="fa-sharp fa-solid fa-arrow-right group-hover:hidden"></i>
                            <span class="hidden group-hover:flex px-2 whitespace-nowrap">View Projects</span>
                        </span>
                    </a>
                    <a href="#" class="group flex items-center gap-5 border-2 border-primary p-5 md:p-6">
                        <span
                            class="hidden md:flex justify-center items-center w-10 h-10 text-lg font-bold bg-primary text-black group-hover:text-primary group-hover:border-2 group-hover:border-primary group-hover:bg-black">2</span>
                        <h4 class="text-lg md:text-xl font-bold">Branding and Visual Designs</h4>
                        <span
                            class="flex justify-center items-center ms-auto w-10 h-10 group-hover:w-fit text-md md:text-lg font-bold bg-primary text-black">
                            <i class="fa-sharp fa-solid fa-arrow-right group-hover:hidden"></i>
                            <span class="hidden group-hover:flex px-2 whitespace-nowrap">View Projects</span>
                        </span>
                    </a>

                    <a href="#" class="group flex items-center gap-5 border-2 border-primary p-5 md:p-6">
                        <span
                            class="hidden md:flex justify-center items-center w-10 h-10 text-lg font-bold bg-primary text-black group-hover:text-primary group-hover:border-2 group-hover:border-primary group-hover:bg-black">3</span>
                        <h4 class="text-lg md:text-xl font-bold">Web Designs</h4>
                        <span
                            class="flex justify-center items-center ms-auto w-10 h-10 group-hover:w-fit text-md md:text-lg font-bold bg-primary text-black">
                            <i class="fa-sharp fa-solid fa-arrow-right group-hover:hidden"></i>
                            <span class="hidden group-hover:flex px-2 whitespace-nowrap">View Projects</span>
                        </span>
                    </a>
                </div>
            </div>


            <div v-else class="col-span-2">
                <div class="grid grid-rows-3 gap-5 md:gap-7">
                    <a target="_blank" :href="data.projects.uiux" class="group flex items-center gap-5 border-2 border-primary p-5 md:p-6">
                        <span
                            class="hidden md:flex justify-center items-center w-10 h-10 text-lg font-bold bg-primary text-black group-hover:text-primary group-hover:border-2 group-hover:border-primary group-hover:bg-black">1</span>
                        <h4 class="text-lg md:text-xl font-bold">UI / UX Projects</h4>
                        <span
                            class="flex justify-center items-center ms-auto w-10 h-10 group-hover:w-fit text-md md:text-lg font-bold bg-primary text-black">
                            <i class="fa-sharp fa-solid fa-arrow-right group-hover:hidden"></i>
                            <span class="hidden group-hover:flex px-2 whitespace-nowrap">View Projects</span>
                        </span>
                    </a>
                    <a target="_blank" :href="data.projects.branding" class="group flex items-center gap-5 border-2 border-primary p-5 md:p-6">
                        <span
                            class="hidden md:flex justify-center items-center w-10 h-10 text-lg font-bold bg-primary text-black group-hover:text-primary group-hover:border-2 group-hover:border-primary group-hover:bg-black">2</span>
                        <h4 class="text-lg md:text-xl font-bold">Branding and Visual Designs</h4>
                        <span
                            class="flex justify-center items-center ms-auto w-10 h-10 group-hover:w-fit text-md md:text-lg font-bold bg-primary text-black">
                            <i class="fa-sharp fa-solid fa-arrow-right group-hover:hidden"></i>
                            <span class="hidden group-hover:flex px-2 whitespace-nowrap">View Projects</span>
                        </span>
                    </a>

                    <a target="_blank" :href="data.projects.webdesign" class="group flex items-center gap-5 border-2 border-primary p-5 md:p-6">
                        <span
                            class="hidden md:flex justify-center items-center w-10 h-10 text-lg font-bold bg-primary text-black group-hover:text-primary group-hover:border-2 group-hover:border-primary group-hover:bg-black">3</span>
                        <h4 class="text-lg md:text-xl font-bold">Web Designs</h4>
                        <span
                            class="flex justify-center items-center ms-auto w-10 h-10 group-hover:w-fit text-md md:text-lg font-bold bg-primary text-black">
                            <i class="fa-sharp fa-solid fa-arrow-right group-hover:hidden"></i>
                            <span class="hidden group-hover:flex px-2 whitespace-nowrap">View Projects</span>
                        </span>
                    </a>
                </div>
                <a target="_blank" :href="data.socialMedia.behance" class="flex border-2 border-primary w-fit text-lg font-semibold bg-primary text-black mt-5 py-2 px-4">View All Projects</a>
            </div>

        </div>

</div></template>
  