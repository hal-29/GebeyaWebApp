import Tag from './Tag'

function Tags() {
   return (
      <div className='flex gap-2 py-2 border-b-2'>
         <Tag label='Laptops' />
         <Tag label='Smart Phones' />
         <Tag label='Smart Watches' />
         <Tag label='Airpods' />
         <Tag label='Headphones' />
         <Tag label='VR Headsets' />
      </div>
   )
}
export default Tags
