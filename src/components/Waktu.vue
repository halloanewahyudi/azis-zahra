<script lang="ts" setup>
import PinVue from "./icons/Pin.vue";


</script>

<template>
    
    <div class="max-w-[400px] relative mx-auto p-6 pt-12 bg-white text-center rounded-xl border-2 border-dashed shadow-xl flex flex-col justify-center items-center">
        <div class="bg-light text-primary py-2 px-4 rounded-full -rotate-3 absolute -top-3">
        <h2>Waktu dan tempat</h2>
    </div>
        <h4 class="text-3xl yellowtail">Akad Nikah</h4>
       <div class="flex gap-3">
        <span>Tanggal </span> <span> 2 November 2024</span>
       </div>
       <div class="flex gap-3">
        <span>Jam </span> <span> 9.00 WIB</span>
       </div>
       <h4 class="text-3xl yellowtail">Resepsi</h4>
       <div class="flex gap-3">
        <span>Jam </span> <span> 13.00 WIB s/d Selesai</span>
       </div>
       <h4 class="text-3xl yellowtail">Lokasi</h4>
       <div class="">
        <span>Aula RW 004,jalan Kramat Pulo gang 9</span>
        <a href="https://maps.app.goo.gl/3LBpGmsXe4TYTNsm8" target="_blank" class="bg-primary text-light py-3 px-5 rounded-full flex items-center gap-2 max-w-max mx-auto group mt-3 hover:bg-opacity-80 duration-300"> Lihat Peta <PinVue class="group-hover:animate-bounce" /> </a>
       </div>
    </div>
</template>
