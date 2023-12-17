import { useSelector } from 'react-redux'
import Redirect from '../../ui/Redirect'

function About() {
   const account = useSelector(store => store.auth.account)

   if (!account) return <Redirect />
   return (
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
         <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
            <tbody>
               <tr className='bg-white border-b'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                     Full Name
                  </th>
                  <td className='px-6 py-4'>{account.name}</td>
               </tr>
               <tr className='bg-white border-b'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                     Email
                  </th>
                  <td className='px-6 py-4'>{account.email}</td>
               </tr>
               <tr className='bg-white border-b'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                     Address
                  </th>
                  <td className='px-6 py-4'>{account.address}</td>
               </tr>
               <tr className='bg-white'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                     Contact
                  </th>
                  <td className='px-6 py-4'> {account.contact}</td>
               </tr>
            </tbody>
         </table>
      </div>
   )
}

export default About
