<script lang="ts" setup>
import PlaneVue from "./icons/Plane.vue";
</script>

<template>
    <div
        class="max-w-[400px] w-full relative mx-auto p-6 pt-12 bg-white rounded-xl border-2 border-dashed shadow-xl flex flex-col justify-center items-center">
        <div class="bg-primary text-secondary  py-2 px-4 rounded-full -rotate-3 absolute -top-3">
            <h2>Buku Tamu</h2>
        </div>
        <div class="w-full">
           <form action="" class="flex flex-col gap-5 w-full">
            <div class="flex flex-col gap-2 w-full">
                <label for="nama">Nama</label>
                <input type="text" class="input" >
            </div>
            <div class="flex flex-col gap-2 w-full">
                <label for="nama">Ucapan / Doa</label>
               <textarea name="" id="" class="input" rows="4"></textarea>
            </div>
            <button class="py-3 px-6 rounded-full bg-primary text-light flex items-center gap-2 max-w-max hover:bg-opacity-80">
                Kirim <PlaneVue />
            </button>
           </form>
        </div>
    </div>
</template>
<style scoped>
.input{
    @apply w-full p-2 rounded-lg border-primary ring-1 ring-primary; 
}
</style>