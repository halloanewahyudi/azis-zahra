<script setup>
import { ref } from "vue";
import CardVue from "./icons/Card.vue";
import PlaneVue from "./icons/Plane.vue";
import { useClipboard } from '@vueuse/core'
const bca = ref('351 xxxx xxxx ')

const { text, copy, copied, isSupported } = useClipboard({ bca })

</script>

<template>
    <div
        class="max-w-[400px] w-full relative mx-auto p-6 pt-12 bg-white rounded-xl border-2 border-dashed shadow-xl flex flex-col justify-center items-center">
        <div class="bg-primary text-secondary  py-2 px-4 rounded-full -rotate-3 absolute -top-3">
            <h2> Kondangan</h2>
        </div>
        <div class="w-full flex gap-3 items-center">
           <img src="/bca.png" alt="" srcset="" class="w-20">
           <div class="mr-auto">
            <p> Azis Muslih</p>
            <span class="text-lg font-semibold"> BCA {{ bca }} </span>
           </div>
           <div v-if="isSupported">
    <button @click="copy(bca)" class="bg-light rounded-lg text-sm p-2 ml-auto shrink-0">
      <!-- by default, `copied` will be reset in 1.5s -->
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </button>
  </div>
  <p v-else>
    Your browser does not support Clipboard API
  </p>
          
        </div>
        <div>
           
        </div>
    </div>
</template>
<style scoped>
.input{
    @apply w-full p-2 rounded-lg border-primary ring-1 ring-primary; 
}
</style>