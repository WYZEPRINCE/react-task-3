import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAFrmJru7pahuO702kOilD79IIn3TMUlM0",
  authDomain: "react-task-3-3a214.firebaseapp.com",
  projectId: "react-task-3-3a214",
  storageBucket: "react-task-3-3a214.firebasestorage.app",
  messagingSenderId: "1047609371204",
  appId: "1:1047609371204:web:13376b83bd9e2d70c6ea11",
  measurementId: "G-YZHM4B2BKX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};