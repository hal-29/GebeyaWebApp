import { useSelector } from 'react-redux'

function About() {
   // const account = useSelector(store => store.auth.account)
   const account = {name: 'someone'}
   
   return (
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
         <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <tbody>
               <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                     Full Name
                  </th>
                  <td className='px-6 py-4'>{account.name}</td>
               </tr>
               <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                     Email
                  </th>
                  <td className='px-6 py-4'>{account.email}</td>
               </tr>
               <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                     Address
                  </th>
                  <td className='px-6 py-4'>{account.address}</td>
               </tr>
               <tr className='bg-white dark:bg-gray-800'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                     Contact
                  </th>
                  <td className='px-6 py-4'> {account.contact}</td>
               </tr>
            </tbody>
         </table>{' '}
      </div>
   )
}
export default About
