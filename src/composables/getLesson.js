import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where, getDoc, doc} from 'firebase/firestore'

const getLesson = (c, mod, ord) => {
  
  const document= ref()
  const error = ref(null)
 

  // register the firestore collection reference
  let colRef = collection(db, c)
  colRef = query(colRef, where("module", "==", mod), where("order", "==", ord))
    
  onSnapshot(colRef, snap => {
    let results = []
    snap.docs.forEach(doc => {
      // must wait for the server to create the timestamp & send it back
      results.push({...doc.data(), id: doc.id})
    });
    
    // update values
   
    
    document.value = results[0]
   
    
    error.value = null
  }, err => {
    console.log(err.message)
    document.value = null
    error.value = 'could not fetch the data'
  })


  
  return document
}

export default getLesson