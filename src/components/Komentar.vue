<script setup>
import PlaneVue from "./icons/Plane.vue";
import { useCollection, useDatabaseList, useDatabaseObject } from 'vuefire';
import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db, auth } from './../firebase.js';
import { ref } from "vue";

const pesanCollection = collection(db, 'undangan');
const pesan = useCollection(pesanCollection);

const komen = ref({})
const code = ref(Math.floor(Math.random()*(9999-100+1)+100))

// Function to send message
const sendMessage = async () => {
    if (komen.value.nama && komen.value.pesan) {
        try {
            await addDoc(collection(db, 'undangan'), {
                nama: komen.value.nama,
                pesan: komen.value.pesan,
                timestamp: new Date(),
            });
            alert('Pesan berhasil dikirim!');
            // Reset form
            komen.value.nama = '';
            komen.value.pesan = '';
        } catch (error) {
            console.error('Error sending message: ', error);
        }
    } else {
        alert('Semua field harus diisi!');
    }
};
</script>

<template>
    <div class="flex flex-col gap-5 w-full">
        <div
            class="max-w-[400px] w-full relative mx-auto p-6 pt-12 bg-white rounded-xl border-2 border-dashed shadow-xl flex flex-col justify-center items-center">
            <div class="bg-primary text-secondary  py-2 px-4 rounded-full -rotate-3 absolute -top-3">
                <h2>Buku Tamu</h2>
            </div>
            <div class="w-full">
                <form @submit.prevent="sendMessage" action="" class="flex flex-col gap-5 w-full">
                    <div class="flex flex-col gap-2 w-full">
                        <label for="nama">Nama</label>
                        <input type="text" class="input" v-model="komen.nama">
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <label for="nama">Ucapan / Doa / Konfirmasi</label>
                        <textarea name="" id="" class="input" rows="4" v-model="komen.pesan"></textarea>
                    </div>
                    <button
                        class="py-3 px-6 rounded-full bg-primary text-light flex items-center gap-2 max-w-max hover:bg-opacity-80">
                        Kirim
                        <PlaneVue />
                    </button>
                </form>

            </div>
        </div>
<div  class="max-w-[400px] w-full relative mx-auto "> Komentar:</div>
            <ul
                class="max-w-[400px] w-full relative mx-auto p-6  bg-white rounded-xl border-2 border-dashed shadow-xl flex flex-col gap-5">
                <li v-for="todo in pesan" :key="todo.id" class="bg-light rounded-xl p-4 flex flex-col gap-1">
                    <span class="font-bold text-primary">{{ todo.nama }}</span>
                    <span>{{ todo.pesan }}</span>
                </li>
            </ul>
    </div>
</template>
<style scoped>
.input {
    @apply w-full p-2 rounded-lg border-primary ring-1 ring-primary;
}
</style>