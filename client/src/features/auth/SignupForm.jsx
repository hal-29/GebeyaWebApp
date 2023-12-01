import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormic } from 'formic'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

function SignupForm() {
   const formic = useFormic({
      initialValues: {
         name: '',
         email: '',
         password: '',
         cpassword: '',
      },
      onSubmit: values => {
         console.log(values)
      },
   })

   // const dispatch = useDispatch()

   return (
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8'>
         <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
               Create your account
            </h2>
         </div>

         <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={formic.handleSubmit}>
               <Input
                  label='Full Name'
                  name='name'
                  placeholder='John Doe'
                  value={formic.values.name}
                  onChange={formic.handleChange}
                  onBlur={formic.handleBlur}
               />
               <Input
                  label='Email Address'
                  name='email'
                  type='email'
                  placeholder='e.g, john@email.com'
                  value={formic.values.email}
                  onChange={formic.handleChange}
                  onBlur={formic.handleBlur}
               />
               <Input
                  label='Password'
                  name='password'
                  type='password'
                  value={formic.values.password}
                  onChange={formic.handleChange}
                  onBlur={formic.handleBlur}
               />
               <Input
                  label='Confirm Password'
                  name='cpassword'
                  type='password'
                  value={formic.values.cpassword}
                  onChange={formic.handleChange}
                  onBlur={formic.handleBlur}
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
