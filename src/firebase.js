// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwQuf0tL26pcpXDmEwxxJDOfcUTRKv4PQ",
  authDomain: "my-learning-project-716bb.firebaseapp.com",
  databaseURL: "https://my-learning-project-716bb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-learning-project-716bb",
  storageBucket: "my-learning-project-716bb.appspot.com",
  messagingSenderId: "410187458284",
  appId: "1:410187458284:web:e7e57efe18b2b75c30a7c9",
  measurementId: "G-BPN8Q1060N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getDatabase(app);

export default app;