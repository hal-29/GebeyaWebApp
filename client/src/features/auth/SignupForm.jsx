import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { setError, signupUser } from './authSlice'
import Steps from '../../ui/Steps'

function SignupForm() {
   const { loading, error } = useSelector(store => store.auth)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [currStep, setCurrStep] = useState(1)

   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         password: '',
         address: '',
         phone: '',
      },
      validationSchema: Yup.object({
         name: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
            .min(3, 'Must be between 3 and 30 characters')
            .max(30, 'Must be between 3 and 30 characters')
            .required('Required'),
         email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
         password: Yup.string()
            .required('Required')
            .matches(
               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*$/,
               'Must contain uppercase, lowercase, number and special character'
            )
            .min(6, 'Must be at least 6 characters')
            .max(30, 'Can not be more than 30 characters'),
      }),
      onSubmit: values => {
         dispatch(
            signupUser(values, () => {
               navigate('/', {
                  replace: true,
                  state: {
                     toast: {
                        message: 'Account created successfully',
                        type: 'success',
                     },
                  },
               })
            })
         )
      },
   })

   const steps = ['Account', 'Contact', 'Finish']

   useEffect(() => {
      if (error) {
         toast.error(error)
      }
      return () => {
         dispatch(setError(null))
      }
   }, [error, dispatch])

   return (
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8'>
         <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
               SignUp
            </h2>
         </div>

         <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
            <div className='border rounded-lg p-4'>
               <div className='flex justify-center py-2'>
                  <Steps current={currStep} steps={steps} />
               </div>

               <form onSubmit={formik.handleSubmit}>
                  {currStep === 1 && (
                     <div className='space-y-2 py-4'>
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
                           error={
                              formik.touched.password && formik.errors.password
                           }
                        />
                     </div>
                  )}

                  {currStep === 2 && (
                     <div className='space-y-2 py-4'>
                        <Input
                           label='Address'
                           name='address'
                           placeholder='e.g, 123 Street, NY'
                           value={formik.values.address}
                           onChange={formik.handleChange}
                        />
                        <Input
                           label='Phone Number'
                           name='phone'
                           type='tel'
                           placeholder='e.g, +251987654321'
                           value={formik.values.phone}
                           onChange={formik.handleChange}
                        />
                     </div>
                  )}

                  {currStep === 3 && (
                     <div className='space-y-2 py-4'>choose avatar</div>
                  )}

                  <div className='flex gap-1'>
                     <Button
                        disabled={currStep === 1}
                        divEl={true}
                        label={'Prev'}
                        onClick={() => setCurrStep(pr => (pr > 1 ? pr - 1 : 1))}
                     />
                     {currStep < steps.length ? (
                        <Button
                           divEl={true}
                           label={'Next'}
                           disabled={Object.entries(formik.errors).length > 0}
                           onClick={() => {
                              if (!Object.entries(formik.errors).length)
                                 setCurrStep(pr => pr + 1)
                           }}
                        />
                     ) : (
                        <Button
                           type='submit'
                           loading={loading}
                           label={'Sign me up'}
                        />
                     )}
                  </div>
               </form>
            </div>
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
