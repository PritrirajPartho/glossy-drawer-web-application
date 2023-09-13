// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJY130oDtQ5SNtsj9EMpve6tbPtA38Bzw",
  authDomain: "glossy-drawer-web.firebaseapp.com",
  projectId: "glossy-drawer-web",
  storageBucket: "glossy-drawer-web.appspot.com",
  messagingSenderId: "1081131507633",
  appId: "1:1081131507633:web:f79b7bab77ddfd0cd3a790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;