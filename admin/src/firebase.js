
import { getStorage } from "firebase/storage";
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "netflix-clone-3ffef.firebaseapp.com",
  projectId: "netflix-clone-3ffef",
  storageBucket: "netflix-clone-3ffef.appspot.com",
  messagingSenderId: "733569460264",
  appId: "1:733569460264:web:0739ed71c63aac92ae2d1d",
  measurementId: "G-VX9WNQQQ9C",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;
