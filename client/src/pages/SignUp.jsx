import { useEffect } from 'react'
import SignupForm from '../features/auth/SignupForm'

function SignUp() {
   useEffect(() => {
      document.title = 'Create Account'
   })
   return (
      <div>
         <SignupForm />
      </div>
   )
}

export default SignUp
