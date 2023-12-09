import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { loadProduct } from './productSlice'
import Button from '../../ui/Button'
import Rating from '../../ui/Rating'

function ProductDetails() {
   const { productId } = useParams()

   const { items, loading } = useSelector(store => store.product)

   const dispatch = useDispatch()

   const [activePhoto, setActivePhoto] = useState(0)

   useEffect(() => {
      dispatch(loadProduct(productId))
   }, [productId, dispatch])

   const product = items[productId]
   if (loading) return <h2 className='text-4xl'>Loading...</h2>
   if (!product) return <h2 className='text-4xl'>Somethig went wrong...</h2>
   return (
      <section className='flex gap-4 p-4 h-full'>
         <div className='basis-1/2 shrink-0 flex flex-col justify-between '>
            <div className='grow overflow-hidden'>
               {product && product.images && (
                  <img
                     src={product.images[activePhoto]}
                     alt={product.name}
                     className='w-full h-full object-cover'
                  />
               )}
            </div>
            <div className=' shrink-0 overflow-x-auto whitespace-nowrap min-w-full'>
               {product &&
                  product.images &&
                  product.images.map((img, i) => {
                     return (
                        <div
                           key={img}
                           className={`cursor-pointer rounded-xl overflow-hidden h-32 w-24 inline-block m-2 outline-2 outline-offset-2  ${
                              activePhoto === i ? 'outline' : ''
                           } `}
                           onClick={() => setActivePhoto(i)}
                        >
                           <img
                              src={img}
                              className='w-full h-full object-cover'
                              alt={product.name}
                           />
                        </div>
                     )
                  })}
            </div>
         </div>
         <div className='flex flex-col gap-4'>
            <h2 className='text-3xl font-semibold'>{product.name}</h2>
            <p className=''>{product.description}</p>
            <div className='flex  gap-3'>
               <Rating />
               <span className='text-xl text-bold'>{product.rating}</span>
            </div>
            <div className='flex justify-between mt-auto'>
               <div className='join'>
                  <div className='btn join-item'>-</div>
                  <div className='bg-gray-200 px-6 text-2xl  inline-flex justify-center items-center join-item  '>
                     1
                  </div>
                  <div className='btn join-item'>+</div>
               </div>
               <span className='text-2xl font-bold'>${product.price}</span>
            </div>
            <Button label='Add to cart' />
         </div>
      </section>
   )
}
export default ProductDetails
