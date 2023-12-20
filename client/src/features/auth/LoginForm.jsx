import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { loginUser, setError } from './authSlice'

function LoginForm() {
   const loading = useSelector(store => store.auth.loading)
   const error = useSelector(store => store.auth.error)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: Yup.object({
         email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
         password: Yup.string().required('Required'),
      }),
      onSubmit: values => {
         dispatch(
            loginUser(values, () => {
               navigate('/', {
                  replace: true,
                  state: {
                     toast: { message: 'Login successful', type: 'success' },
                  },
               })
            })
         )
      },
   })

   useEffect(() => {
      if (error) {
         toast.error(error)
      }
      return () => {
         dispatch(setError(null))
      }
   }, [error, dispatch])

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
            <form className='space-y-6' onSubmit={formik.handleSubmit}>
               <Input
                  label='Email Address'
                  name='email'
                  placeholder='your email'
                  type='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
               />
               <Input
                  label='Password'
                  name='password'
                  type='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && formik.errors.password}
               />

               <Button
                  type='submit'
                  loading={loading}
                  label={loading ? 'Signing in...' : 'Sign in'}
               />
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
               Do not have an account?{' '}
               <Link
                  to='/signup'
                  className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
               >
                  Create account
               </Link>
            </p>
         </div>
      </div>
   )
}

export default LoginForm
