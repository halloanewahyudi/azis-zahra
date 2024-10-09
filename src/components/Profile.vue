<script setup>
import { animate, inView } from "motion";
import { onMounted } from "vue";
import KomentarVue from "./Komentar.vue";
import KondanganVue from "./Kondangan.vue";
import TurutMengundangVue from "./TurutMengundang.vue";
import WaktuVue from "./Waktu.vue";

onMounted(() => {
    animate(".foto", {
        opacity: [0, 1],
        scale: [2, 1]
    }, {
        duration: 1,
        delay: .2
    })

    onMounted(() => {
        inView("section", ({ target }) => {
            console.log(target)
        });
    })

})

</script>
<template>
    <section id="couple" class="flex flex-col justify-center items-center min-h-screen py-20">
        <div class="max-w-screen-md mx-auto text-center px-6 flex flex-col gap-5">
            <h4 class="italic text-semibold text-2xl font-semibold yellowtail">Assalamu’alaikum Warahmatullahi
                Wabarakatuh</h4>
            <p>
                Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
                Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
            </p>
            <img src="/couple.png" alt="" class="foto w-[280px] h-[280px] mx-auto">
            <div class="couple grid grid-cols-1 lg:grid-cols-2 gap-10 text-center">
                <div>
                    <h4 class="yellowtail"> Aziz</h4>
                    <p>Muslih Azis</p>
                    <p class="">Putra ke3 dari Pasangan</p>
                    <p>Haris Maulani & Nurhidayanti</p>
                </div>
                <div>
                    <h4 class="yellowtail"> Zahra Nabillah</h4>
                    <p>Zahra</p>
                    <p class="">Putra Pertama dari Pasangan</p>
                    <p>Darma Supriatn & Yuliana</p>
                </div>
            </div>
        </div>
    </section>
   
</template>
<style scoped>
.couple h4 {
    @apply font-semibold text-3xl text-primary;
}

</style>