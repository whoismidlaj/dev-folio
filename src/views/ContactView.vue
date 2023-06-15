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
  
const formatPhoneNumber = phoneNumber => {
  // Remove spaces from the phone number
  return phoneNumber.replace(/\s/g, '');
};
  
  onMounted(fetchData);
</script>

<template>
    <div class="h-screen flex flex-col justify-center py-10">

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-64">

            <div class="col-span-1">
                <h1 class="text-5xl font-bold mb-5 md:mb-10">Contact.</h1>
                <Social />
            </div>

            <div v-if="isLoading" class="col-span-2">
            </div>

            <div v-else class="col-span-2">
                <div class="mb-8 md:mb-14">
                    <p class="text-lg md:text-2xl font-medium mb-2">Write me an email ,</p>
                    <a class="text-2xl md:text-5xl font-bold" :href="`mailto:${data.email}`">{{ data.email }}</a>
                </div>
                <div>
                    <p class="text-lg md:text-2xl font-medium mb-3">You can reach me at ,</p>
                    <a class="text-3xl md:text-5xl font-bold" :href="`tel:${formatPhoneNumber(data.phone)}`">{{ data.phone }}</a>
                </div>
            </div>
        </div>

</div></template>
  