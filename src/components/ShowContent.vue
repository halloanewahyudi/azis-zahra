<script setup>
import { animate, inView } from "motion";
import { onMounted, ref } from "vue";

onMounted(()=>{
    animate(".tampil", { opacity: [0,1],scale:[.4, 1] },{duration:1, delay:.2})
})

</script>
<template>
    
<div class="tampil max-w-max max-h-max">
<slot />
</div>
</template>