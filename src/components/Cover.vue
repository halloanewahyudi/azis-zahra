<script setup>
import { timeline, stagger } from "motion"
import { onMounted } from 'vue'

const sequence = [
    [".undangan", { opacity: [0, 1] }, { duration: 2 }],
    [".nama span", { opacity: [0, 1], scale: [1.2, 1], y: [100, 0] }, { duration: 1, delay: stagger(0.3) }],
    [".waktu", { opacity: [0, 1] }],
    [".btn", { opacity: [0, 1], scale: [2, 1] }]
]
onMounted(() => {
    timeline(sequence, { duration: 2 })
})

</script>

<template>
    <div class="cover min-h-screen flex flex-col justify-center items-center">
        <div class="max-w-[400px] w-full p-8 mx-auto text-center ">
          <div v-if="$route.query.name">
            <div class="-rotate-3 font-semibold p-2 bg-white shadow-xl">
                <p>Kepada,{{ $route.query.name }}</p>
            </div>
          </div>
            <p class="undangan text-2xl yellowtail  text-purple-800  -rotate-3">Undangan Pernikahan</p>

            <div class="nama text-6xl lg:text-[100px] yellowtail text-primary flex flex-col gap-0 relative">
                <span class="mb-20">Zahra </span>
                <span class="absolute top-1/3  left-1/2  text-5xl lg:text-7xl">&</span>
                <span class="-mt-20 "> Azis</span>
            </div>
            <p class="text-xl font-bold waktu pb-5"> 2 november 2024</p>
            <router-link to="/couple" class="btn py-2 px-5 rounded-full bg-primary text-purple-50 ">Buka undangan</router-link>
        </div>
    </div>
</template>
<style scoped>
.cover {
    background-image: url('/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>