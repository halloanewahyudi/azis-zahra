<script lang="ts" setup>
import { animate } from "motion";
import { onMounted } from "vue";

onMounted(()=>{
    animate(".content", {
        opacity: [0, 1],
        scale: [2, 1]
    }, {
        duration: 1,
        delay: .2
    })
})
</script>

<template>
    <section id="turut-mengundang" class="min-h-screen flex fle-col justify-center items-center px-6">

        <show-content> 
        <div   class="content max-w-[400px] relative mx-auto p-6 pt-12 bg-white rounded-xl border-2 border-dashed shadow-xl flex flex-col justify-center items-center">
            <div class="bg-secondary text-primary py-2 px-4 rounded-full -rotate-3 absolute -top-3">
                <h2>Turut Mengundang</h2>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <span class="p-3 rounded-lg bg-light">kel. almarhum Drs. Deden Djuangna </span>
                <span class="p-3 rounded-lg bg-light"> Kel. Almarhumah Siti armila </span>
                <span class="p-3 rounded-lg bg-light"> Kel. Almarhum M. Syafei </span>
                <span class="p-3 rounded-lg bg-light"> Kel. Wanda Ningsih </span>
                <span class="p-3 rounded-lg bg-light"> Ustd. Mario </span>
            </div>
        </div>
    </show-content>
    </section>
</template>
