import Tag from '../../ui/Tag'

function Filter() {
   return (
      <div className='flex justify-center gap-2 wrap p-3 border-y'>
         <Tag label='samsung' />
         <Tag label='apple' />
         <Tag label='sony' />
         <Tag label='huawei' />
         <Tag label='google' />
         <Tag label='oppo' />
      </div>
   )
}
export default Filter
