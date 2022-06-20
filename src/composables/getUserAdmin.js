import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const getUserAdmin = (c, id) => {

  const document = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let documentRef = collection(c)
  documentRef = query(documentRef, where("id", "==", id))

  const unsub = onSnapshot(doc => {
    
    if (doc.data()){
        document.value = {...doc.data(), id:doc.id}
        error.value = null
    } else {
        error.value = 'that document does not exist'
    }
  }, err => {
    console.log(err.message)
    error.value = 'could not fetch the document'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  const userValid = ref(document[0])

  return { error, userValid }
}

export default getUserAdmin