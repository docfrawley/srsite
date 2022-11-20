import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const getOrderDocs = (c, keyField, fieldValue) => {

  const documents = ref(null)

  // register the firestore collection reference
  let colRef = collection(db, c)
  // if (keyField==='course'){
  //    colRef = query(colRef, where("course", "==", fieldValue))
  // } 
  // if (keyField==='module') {
  //   console.log('here: ', fieldValue)
  //    colRef = query(colRef, where("module", "==", fieldValue))
  // }
 

  switch(keyField) {
    case ('course'):
      colRef = query(colRef, where("course", "==", fieldValue))
      break;
    case ('module'):
      colRef = query(colRef, where("module", "==", fieldValue))
      break;
    case ('vid'):
      colRef = query(colRef, where("vid", "==", fieldValue))
      break;
    default:
      break;
  }
 
    
  const unsub = onSnapshot(colRef, snap => {
    let results = []
    snap.docs.forEach(doc => {
      // must wait for the server to create the timestamp & send it back
      results.push({...doc.data(), id: doc.id})
    });

    // update values
    documents.value = results
    
    // if (keyField==='course') {
    //   documents.value.sort((a, b) => (a.modnumb > b.modnumb) ? 1 : -1)
    // } else {
    //   documents.value.sort((a, b) => (a.order > b.order) ? 1 : -1)
    // }

    switch(keyField) {
    case ('course'):
      documents.value.sort((a, b) => (a.modnumb > b.modnumb) ? 1 : -1)
      break;
    case ('module'):
      documents.value.sort((a, b) => (a.order > b.order) ? 1 : -1)
      break;
    case ('vid'):
      documents.value.sort((a, b) => (a.vcue > b.vcue) ? 1 : -1)
      break;
    default:
      break;
  }
    
  })
  return { documents }
}

export default getOrderDocs