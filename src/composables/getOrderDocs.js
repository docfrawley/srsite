import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const getOrderDocs = (c, keyField, fieldValue) => {

  const documents = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let colRef = collection(db, c)
  if (keyField==='course'){
     colRef = query(colRef, where("course", "==", fieldValue))
  } else {
     colRef = query(colRef, where("module", "==", fieldValue))
  }
 
    
  const unsub = onSnapshot(colRef, snap => {
    let results = []
    snap.docs.forEach(doc => {
      // must wait for the server to create the timestamp & send it back
      results.push({...doc.data(), id: doc.id})
    });

    // update values
    documents.value = results
    
    // update values
    if (keyField==='course') {
      documents.value.sort((a, b) => (a.module > b.module) ? 1 : -1)
    } else {
      documents.value.sort((a, b) => (a.order > b.order) ? 1 : -1)
    }
    
    
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch the data'
  })
  return { error, documents }
}

export default getOrderDocs