import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const getOrderDocs = (c, mod, ord) => {
  
  const document= ref(null)
  const error = ref(null)
  const thevid = ref()

  // register the firestore collection reference
  let colRef = collection(db, c)
  colRef = query(colRef, where("module", "==", mod), where("order", "==", ord))
    
  const unsub = onSnapshot(colRef, snap => {
    let results = []
    snap.docs.forEach(doc => {
      // must wait for the server to create the timestamp & send it back
      results.push({...doc.data(), id: doc.id})
    });
    
    // update values
   

    document.value = results[0]
    thevid.value = document.value.iframe
    
    error.value = null
  }, err => {
    console.log(err.message)
    document.value = null
    error.value = 'could not fetch the data'
  })
  
  return thevid
}

export default getOrderDocs