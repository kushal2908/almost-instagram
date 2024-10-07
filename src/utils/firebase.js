import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: mport.meta.env.VITE_AUTH_DOMAIN,
  projectId: mport.meta.env.VITE_PROJECT_ID,
  storageBucket: mport.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: mport.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: mport.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
