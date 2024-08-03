import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzGwMM3siWKGFxJShDMWQZOqef_9-bs6A",
    authDomain: "shopnest-webapp.firebaseapp.com",
    projectId: "shopnest-webapp",
    storageBucket: "shopnest-webapp.appspot.com",
    messagingSenderId: "478885093307",
    appId: "1:478885093307:web:ffccb3eb17cb46ea7d2e9e"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);