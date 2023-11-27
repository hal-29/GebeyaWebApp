import { Link } from 'react-router-dom'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

function LoginForm() {
   return (
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 '>
         <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <img
               className='mx-auto h-10 w-auto'
               src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
               alt='Your Company'
            />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
               Sign in to your account
            </h2>
         </div>

         <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm '>
            <form className='space-y-6' action='#' method='POST'>
               <Input
                  label='Email Address'
                  name='email'
                  placeholder='your email'
                  type='email'
                  id='email'
               />
               <Input
                  label='Password'
                  name='password'
                  type='password'
                  id='password'
               />

               <Button label='Sign in' />
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
               Do not have an account?{' '}
               <Link
                  to='/signup'
                  className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
               >
                  Let's get started
               </Link>
            </p>
         </div>
      </div>
   )
}
export default LoginForm
