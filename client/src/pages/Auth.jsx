import { PropTypes } from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const accountSchema = z.object({
   name: z.string().min(3, 'Name must be atleast 3 characters'),
   email: z.string().email(),
   address: z.string().min(1, 'Address is required'),
   password: z.string().min(6),
})

const loginSchema = z.object({
   email: z.string().email(),
   password: z.string().min(1, 'Password is required'),
})

Auth.propTypes = {
   showAuth: PropTypes.bool.isRequired,
   setShowAuth: PropTypes.func.isRequired,
}

function Auth({ showAuth, setShowAuth }) {
   const formEl = useRef(null)
   const [activeForm, setActiveForm] = useState('login')
   const registerForm = useForm({
      resolver: zodResolver(accountSchema),
   })
   const onRegisterSubmit = registerForm.handleSubmit(data => {
      console.log(data)
   })

   const loginForm = useForm({
      resolver: zodResolver(loginSchema),
   })

   const onLoginSubmit = loginForm.handleSubmit(data => {
      console.log(data)
   })

   useEffect(() => {
      if (activeForm === 'login') {
         loginForm.reset()
      } else {
         registerForm.reset()
      }
   }, [loginForm, registerForm, activeForm])

   useEffect(() => {
      const handler = e => {
         if (formEl.current && !formEl.current.contains(e.target)) {
            setShowAuth(false)
         }
      }
      document.addEventListener('mousedown', handler, true)
      return () => document.removeEventListener('mousedown', handler, true)
   }, [setShowAuth])

   return (
      <section
         ref={formEl}
         className={` z-50 fixed bg-white shadow-md pt-12 w-[30rem] top-0 h-svh transition-all ${
            showAuth ? 'right-0' : '-right-full'
         }`}
      >
         <span
            className='top-10 left-10 absolute rounded-full w-5 h-5 text-lg cursor-pointer'
            onClick={() => setShowAuth(false)}
         >
            <FaXmark />
         </span>

         <form
            onSubmit={onLoginSubmit}
            className={`mx-auto p-6 max-w-md ${
               activeForm === 'login' ? 'block' : 'hidden'
            }`}
         >
            <h2 className='py-4 text-3xl text-center'>Login</h2>
            {
               <span className='text-red-500 text-sm'>
                  {loginForm.formState.errors?.root?.message}
               </span>
            }
            <div className='py-2'>
               <label htmlFor='email' className='block'>
                  Email
               </label>
               <input
                  type='email'
                  name='email'
                  id='email'
                  {...loginForm.register('email')}
                  className='border-gray-300 px-4 py-2 border w-full focus:outline-none'
               />
               {
                  <span className='text-red-500 text-sm'>
                     {loginForm.formState.errors?.email?.message}
                  </span>
               }
            </div>
            <div className='py-2'>
               <label htmlFor='password' className='block'>
                  Password
               </label>
               <input
                  type='password'
                  name='password'
                  id='password'
                  {...loginForm.register('password')}
                  className='border-gray-300 px-4 py-2 border w-full focus:outline-none'
               />
               {
                  <span className='text-red-500 text-sm'>
                     {loginForm.formState.errors?.password?.message}
                  </span>
               }
            </div>
            <div className='py-2'>
               <button
                  type='submit'
                  className='bg-red-800 hover:bg-red-800/80 px-6 py-2 text-gray-100 text-xl capitalize transition'
               >
                  Login
               </button>
            </div>
            <div>
               <p className='text-sm'>
                  Don&apos;t have an account?
                  <span
                     className='px-1 text-red-900 underline cursor-pointer'
                     onClick={() => setActiveForm('register')}
                  >
                     Register
                  </span>
               </p>
            </div>
         </form>

         <form
            onSubmit={onRegisterSubmit}
            className={`mx-auto p-6 max-w-md ${
               activeForm === 'register' ? 'block' : 'hidden'
            }`}
         >
            <h2 className='py-4 text-3xl text-center'>Login</h2>

            <div className='py-2'>
               <label htmlFor='name' className='block'>
                  Name
               </label>
               <input
                  type='text'
                  name='name'
                  id='name'
                  {...registerForm.register('name')}
                  className='border-gray-300 px-4 py-2 border w-full focus:outline-none'
               />
               {registerForm.formState.errors?.name && (
                  <span className='text-red-500 text-sm'>
                     {registerForm.formState.errors?.name?.message}
                  </span>
               )}
            </div>
            <div className='py-2'>
               <label htmlFor='email' className='block'>
                  Email
               </label>
               <input
                  type='email'
                  name='email'
                  id='email'
                  {...registerForm.register('email')}
                  className='border-gray-300 px-4 py-2 border w-full focus:outline-none'
               />
               {registerForm.formState.errors?.email && (
                  <span className='text-red-500 text-sm'>
                     {registerForm.formState.errors?.email?.message}
                  </span>
               )}
            </div>
            <div className='py-2'>
               <label htmlFor='address' className='block'>
                  Address
               </label>
               <input
                  type='text'
                  name='address'
                  {...registerForm.register('address')}
                  id='address'
                  className='border-gray-300 px-4 py-2 border w-full focus:outline-none'
               />
               {registerForm.formState.errors?.address && (
                  <span className='text-red-500 text-sm'>
                     {registerForm.formState.errors?.address?.message}
                  </span>
               )}
            </div>

            <div className='py-2'>
               <label htmlFor='password' className='block'>
                  Password
               </label>
               <input
                  type='password'
                  name='password'
                  id='password'
                  {...registerForm.register('password')}
                  className='border-gray-300 px-4 py-2 border w-full focus:outline-none'
               />
               {registerForm.formState.errors?.password && (
                  <span className='text-red-500 text-sm'>
                     {registerForm.formState.errors?.password?.message}
                  </span>
               )}
            </div>
            <div className='py-2'>
               <button
                  type='submit'
                  className='bg-red-800 hover:bg-red-800/80 px-6 py-2 text-gray-100 text-xl transition cursor-pointer'
               >
                  Register
               </button>
            </div>
            <div>
               <p className='text-sm'>
                  Aleady have an account?
                  <span
                     className='px-1 text-red-900 underline cursor-pointer'
                     onClick={() => setActiveForm('login')}
                  >
                     Login
                  </span>
               </p>
            </div>
         </form>
      </section>
   )
}
export default Auth
