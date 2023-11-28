import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALUgnIbl2qnbPlssUNhiEkBQYj9jPYgJk",
    authDomain: "reactlinks-f3896.firebaseapp.com",
    projectId: "reactlinks-f3896",
    storageBucket: "reactlinks-f3896.appspot.com",
    messagingSenderId: "942588328909",
    appId: "1:942588328909:web:4e2173cf3fd93664eb2284",
    measurementId: "G-GXDNMSTDTL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};