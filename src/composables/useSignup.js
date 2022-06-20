import { ref } from 'vue'

// firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword  } from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)


const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password, displayName)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    
    error.value = null
    isPending.value = false
    
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useSignup = () => {
  return { error, signup, isPending }
}

export default useSignup