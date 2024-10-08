<script setup>
import { animate, inView } from "motion";
import { onMounted, ref } from "vue";
const tampil = ref(null)
onMounted(()=>{
    inView("section", (info) => {
    animate(info.target, { opacity: 1 })
})
})

</script>
<template>
    
<div ref="tampil" class="">

</div>
</template>