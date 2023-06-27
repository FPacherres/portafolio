import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyApxYcFGvsfwxPi1ufR_A6YngfbtE4-A9s",
  authDomain: "portafolio-1faf0.firebaseapp.com",
  projectId: "portafolio-1faf0",
  storageBucket: "portafolio-1faf0.appspot.com",
  messagingSenderId: "877717977860",
  appId: "1:877717977860:web:55e8d0465a6277552aee51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }