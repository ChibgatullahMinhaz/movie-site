import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxeBT1oRlNHSkxrIAcHYr6PITVd9oUUZc",
  authDomain: "movie-minia---movie-site.firebaseapp.com",
  projectId: "movie-minia---movie-site",
  storageBucket: "movie-minia---movie-site.firebasestorage.app",
  messagingSenderId: "1096636152583",
  appId: "1:1096636152583:web:426a939f886d798915a3a2",
  measurementId: "G-4ZGXN6RTGH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
