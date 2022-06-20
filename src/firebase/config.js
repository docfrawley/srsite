// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage'
import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA_M3UBwK2a4Y4LRyo_g0M-GqyIsp6ATWY",
  authDomain: "self-relationality.firebaseapp.com",
  projectId: "self-relationality",
  storageBucket: "self-relationality.appspot.com",
  messagingSenderId: "1011932498740",
  appId: "1:1011932498740:web:e9e653005e981a0750f361",
  measurementId: "G-1QH2NYKPMM"
};

// init firebase
// firebase.initializeApp(firebaseConfig)
initializeApp(firebaseConfig)


// init services
const db = getFirestore()
const auth = getAuth()
const timestamp = serverTimestamp()
// const projectFirestore = firebase.firestore()
// const projectAuth = firebase.auth()
// const projectStorage = firebase.storage()

// timestamp
// const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export { projectFirestore, projectAuth, projectStorage, timestamp }
export { db, auth, timestamp }