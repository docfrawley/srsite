import { ref } from 'vue'

// firebase imports
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const useCollection = (c) => {

  const error = ref(null)
  const isPending = ref(false)
  const colRef = collection(db, c)

  // add a new document
  const addTheDocument = async (doc) => {
    error.value = null
    isPending.value = true

    try {
      await addDoc(colRef, doc)
      isPending.value = false
      return res
    }
    catch(err) {
      console.log(err.message)
      error.value = 'could not send the message'
      isPending.value = false
    }
  }

  return { error, addTheDocument, isPending }

}

export default useCollection
