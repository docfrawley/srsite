import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const getUserAdmin = async (c, id) => {

  const document = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let documentRef = collection(db, c)


  documentRef = await query(documentRef, where("id", "==", id))
 

  await onSnapshot(documentRef, snap => {
    let results = []
    snap.docs.forEach(doc => {
      // must wait for the server to create the timestamp & send it back
      results.push({...doc.data(), id: doc.id})
    });
    
    // update values
   
    if (results){
      document.value = results[0].admin
    } else {
      document.value = false
    }
    
    
    error.value = null
  }, err => {
    console.log(err.message)
    document.value = null
    error.value = 'could not fetch the data'
  })


  
  return document
}

export default getUserAdmin