import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "netflix-clone-3ffef.firebaseapp.com",
  projectId: "netflix-clone-3ffef",
  storageBucket: "netflix-clone-3ffef.appspot.com",
  messagingSenderId: "733569460264",
  appId: "1:733569460264:web:0739ed71c63aac92ae2d1d",
  measurementId: "G-VX9WNQQQ9C",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
