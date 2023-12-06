import Pagination from '../../ui/Pagination'
import Card from '../dashboard/Card'

function ProductsList() {
   return (
      <section className='flex flex-col items-center gap-6'>
         <div className='inline-flex flex-wrap gap-4 '>
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
            <Card phone={{ images: [] }} />
         </div>
         <Pagination />
      </section>
   )
}
export default ProductsList
