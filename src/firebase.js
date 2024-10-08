// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyALKE-hJ4ALrKHFohFlpQBGyMdUqxmQ3v4",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "deft-tube-281204",
   storageBucket: "gs://deft-tube-281204.appspot.com",
  //  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
   // appId: "YOUR_APP_ID"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
export { auth, db, storage, firebaseApp };
