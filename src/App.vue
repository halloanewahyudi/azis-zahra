<script setup >
import BookVue from "./components/icons/Book.vue";
import CommentVue from "./components/icons/Comment.vue";
import GiftVue from "./components/icons/Gift.vue";
import HandVue from "./components/icons/Hand.vue";
import HomeVue from "./components/icons/Home.vue";
import LoveVue from "./components/icons/Love.vue";
import TimeVue from "./components/icons/Time.vue";
import {useRoute} from 'vue-router'
import { onMounted } from "vue";

const route = useRoute()

</script>

<template>
  <div>
   <router-view ></router-view>
   <div class="px-6">
    <div class="py-2 px-4 bg-primary text-secondary text-xl rounded-full flex items-center justify-center gap-4 w-full max-w-max mx-auto fixed left-0 right-0 bottom-2">
      <router-link to="/"> <HomeVue /> </router-link>
      <router-link to="/couple"> <LoveVue /> </router-link>
      <router-link to="/waktu"> <TimeVue /> </router-link>
      <router-link to="/turut-mengundang"> <HandVue /> </router-link>
      <router-link to="/kondangan"> <GiftVue /> </router-link>
      <router-link to="/komentar"> <BookVue /> </router-link>
   </div>
   </div>
  </div>
</template>
