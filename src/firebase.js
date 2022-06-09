import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCqzWMMZVLeZ7zbeI-IsJ4PMT0RdLAgfWI",
    authDomain: "magazine-40b77.firebaseapp.com",
    projectId: "magazine-40b77",
    storageBucket: "magazine-40b77.appspot.com",
    messagingSenderId: "152481778127",
    appId: "1:152481778127:web:d6299a797dd998af7a2aba",
    measurementId: "G-6X2NQ42DHR"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app