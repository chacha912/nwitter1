// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged as FonAuthStateChanged,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const authService = getAuth();
export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(authService, email, password);
};
export const signInUser = async (email, password) => {
  await signInWithEmailAndPassword(authService, email, password);
};
export const onAuthStateChanged = (fn) => {
  FonAuthStateChanged(authService, fn);
};
export { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

// Initialize Cloud Firestore and get a reference to the service
export const dbService = getFirestore(app);
export { collection, addDoc, onSnapshot, query, doc, deleteDoc, updateDoc } from 'firebase/firestore';

// Initialize Cloud Storage and get a reference to the service
export const storageService = getStorage(app);
export { ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
