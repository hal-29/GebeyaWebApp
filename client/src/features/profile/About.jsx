function About() {
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
                  <td className='px-6 py-4'>Jane Doe</td>
               </tr>
               <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                     Email
                  </th>
                  <td className='px-6 py-4'>janedoe@email.com</td>
               </tr>
               <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                     Address
                  </th>
                  <td className='px-6 py-4'>
                     123 Street, Addis Ababa, Ethiopia{' '}
                  </td>
               </tr>
               <tr className='bg-white dark:bg-gray-800'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                     Contact
                  </th>
                  <td className='px-6 py-4'> +251987654321</td>
               </tr>
            </tbody>
         </table>{' '}
      </div>
   )
}
export default About
