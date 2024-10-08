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
            animate(
                target.querySelector("h2"),
                { opacity: 1, transform: "none" },
                { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
            );
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
                    <p class="">Putra Pertama dari Pasangan</p>
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
    <section id="waktu" class="min-h-screen flex fle-col justify-center items-center bg-secondary bg-opacity-20 px-6">
        <WaktuVue />
    </section>
    <section id="turut-mengundang" class="min-h-screen flex fle-col justify-center items-center px-6">
        <TurutMengundangVue />
    </section>
    <section id="kondangan" class="min-h-screen flex fle-col justify-center items-center px-6 bg-neutral-50">
        <KondanganVue class="transfer" />
    </section>
    <section id="komentar"
        class="min-h-screen flex fle-col justify-center items-center px-6 bg-secondary bg-opacity-20">
        <KomentarVue />
    </section>
</template>
<style scoped>
.couple h4 {
    @apply font-semibold text-3xl text-primary;
}
#couple, #waktu,#turut-mengundang,#kondangan,#komentar{
    background-image: url('/bg-transparent.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>