import { initializeApp } from "firebase/app";

const database = initializeApp({
  apiKey: "AIzaSyDKqNmnpTpxd6Pjp-Qbi0mx_K8jfBoh2H0",
  authDomain: "tcrm-f19b4.firebaseapp.com",
  databaseURL: "https://tcrm-f19b4-default-rtdb.firebaseio.com",
  projectId: "tcrm-f19b4",
  storageBucket: "tcrm-f19b4.appspot.com",
  messagingSenderId: "668809068910",
  appId: "1:668809068910:web:2decb358bde3995c07c17f"
});

export default database