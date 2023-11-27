// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage'
import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
 
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