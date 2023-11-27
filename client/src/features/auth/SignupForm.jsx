import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

function SignupForm() {
   const submitHanlder = async e => {
      e.preventDefault()
      const form = new FormData(e.target)
      const formData = {}
      for (let [name, value] of form) {
         formData[name] = value
      }

      try {
         const res = await axios.post(
            'http://localhost:5000/api/auth/signup',
            formData
         )
         console.log(res)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8'>
         <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
               Create your account
            </h2>
         </div>

         <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form
               className='space-y-6'
               action='#'
               method='POST'
               onSubmit={submitHanlder}
            >
               <Input
                  id='name'
                  label='Full Name'
                  name='name'
                  placeholder='John Doe'
               />
               <Input
                  id='email'
                  label='Email Address'
                  name='email'
                  type='email'
                  placeholder='e.g, john@email.com'
               />
               <Input
                  id='password'
                  label='Password'
                  name='password'
                  type='password'
               />
               <Input
                  id='cpassword'
                  label='Confirm Password'
                  name='cpassword'
                  type='password'
               />

               <Button type='submit' label={'Create My Account'} />
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
               Already have an account?{' '}
               <Link
                  to='/signin'
                  className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
               >
                  Login
               </Link>
            </p>
         </div>
      </div>
   )
}

export default SignupForm
