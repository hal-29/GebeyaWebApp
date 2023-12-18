import { useEffect } from 'react'
import LoginForm from '../features/auth/LoginForm'

function SignIn() {
   useEffect(() => {
      document.title = 'Login'
   })
   return (
      <div className='min-h-[90vh]'>
         <LoginForm />
      </div>
   )
}

export default SignIn
