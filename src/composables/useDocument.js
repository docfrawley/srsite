import { ref } from 'vue'
import { db } from '../firebase/config'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

const useDocument = (c, id) => {

  let error = ref(null)
  let isPending = ref(false)
  let docRef =doc(db, c, id)

  const deleteTheDoc = async () => {
    isPending.value = true
    error.value = null

    try {
      await deleteDoc(docRef)
      isPending.value = false
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not delete the document'
    }
  } 

  const updateTheDoc = async (updates) => {
    isPending.value = true
    error.value = null

    try {
      await updateDoc(docRef, updates)
      isPending.value = false
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not update the document'
    }
  }

  return { error, isPending, deleteTheDoc, updateTheDoc }

}

export default useDocument