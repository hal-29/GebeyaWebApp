import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { signup } from './authSlice'

function SignupForm() {
   const { loading, account, error } = useSelector(store => store.auth)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         password: '',
         cpassword: '',
      },
      validationSchema: Yup.object({
         name: Yup.string()
            .matches(/^[a-zA-Z]+$/, 'Only letters are allowed')
            .min(3, 'Must be between 3 and 30 characters')
            .max(30, 'Must be between 3 and 30 characters')
            .required('Required'),
         email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
         password: Yup.string()
            .required('Required')
            .matches(
               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/,
               'Must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be between 6 and 30 characters'
            ),
         cpassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      }),
      onSubmit: values => {
         dispatch(signup(values))
      },
   })

   useEffect(() => {
      if (account) {
         navigate('/', {
            replace: true,
            state: {
               toast: { message: 'Successfully Created!', type: 'success' },
            },
         })
      }
   }, [account, navigate])

   useEffect(() => {
      if (error) {
         toast(error)
      }
   }, [error])

   return (
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8'>
         <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
               Create your account
            </h2>
         </div>

         <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={formik.handleSubmit}>
               <Input
                  label='Full Name'
                  name='name'
                  placeholder='John Doe'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && formik.errors.name}
               />
               <Input
                  label='Email Address'
                  name='email'
                  type='email'
                  placeholder='e.g, john@email.com'
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
               <Input
                  label='Confirm Password'
                  name='cpassword'
                  type='password'
                  value={formik.values.cpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.cpassword && formik.errors.cpassword}
               />

               <Button
                  type='submit'
                  loading={loading}
                  label={loading ? 'Creating account...' : 'Create My Account'}
               />
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
