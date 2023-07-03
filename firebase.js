// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCok9ZT_2_xGE377G9eZYumIoCVwOd-dW4",
  authDomain: "odekakemaster.firebaseapp.com",
  projectId: "odekakemaster",
  storageBucket: "odekakemaster.appspot.com",
  messagingSenderId: "696813211762",
  appId: "1:696813211762:web:ce641498396865e1cab2eb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };