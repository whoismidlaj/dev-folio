<script>
    import { Vue3Marquee } from 'vue3-marquee'
    import 'vue3-marquee/dist/style.css'

    export default {
        name: "BasicExample",
        components: {
            Vue3Marquee,
        },
        // data() {
        //     return {
        //     helloArray: [
        //         "UI / UX",
        //         "Branding and Visual Designs",
        //         "Web Design",
        //         "UI / UX",
        //         "Branding and Visual Designs",
        //         "Web Design",
        //         "UI / UX",
        //         "Web Design"
        //     ],
        //     };
        // },
        }

</script>

<template>
    <div class="bg-primary text-black flex justify-center fixed bottom-0 left-0 w-full">
        <Vue3Marquee class="py-5 overflow-hidden" :clone="true" :duration="30" :pauseOnHover="true">
            <!-- <span
                v-for="(word, index) in helloArray"
                :key="index"
                class="text-lg uppercase font-medium px-14"
                >
                {{ word }}
            </span> -->
            <span class="text-lg uppercase font-medium px-10">UI / UX</span>
            <i class="fa-solid fa-star-of-life"></i>
            <span class="text-lg uppercase font-medium px-14">Branding and Visual Designs</span>
            <i class="fa-solid fa-star-of-life"></i>
            <span class="text-lg uppercase font-medium px-14">Web design</span>
            <i class="fa-solid fa-star-of-life"></i>
        </Vue3Marquee>
    </div>
</template>
  