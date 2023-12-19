import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { loadProduct } from './productSlice'
import Button from '../../ui/Button'
import Rating from '../../ui/Rating'
import { addToCart, removeCartItem } from '../cart/cartSlice'
import Loading from '../../ui/Loading'
import Image from '../../ui/Image'

function ProductDetails() {
   const [activePhoto, setActivePhoto] = useState(0)
   const { productId } = useParams()
   const dispatch = useDispatch()

   const items = useSelector(store => store.product.items)
   const loading = useSelector(store => store.product.loading)
   const cartItems = useSelector(store => store.cart.cartItems)

   useEffect(() => {
      if (!items[productId]) dispatch(loadProduct(productId))
   }, [productId, dispatch, items])

   useEffect(() => {
      document.title = items[productId]?.name || 'Product'
   }, [items, productId])

   if (loading || !items[productId]) return <Loading />
   return (
      <section className='flex gap-4 p-4 h-full'>
         <div className='basis-1/2 shrink-0 flex flex-col justify-between '>
            <div className='grow overflow-hidden'>
               {items[productId] && items[productId].images && (
                  <Image
                     src={items[productId].images[activePhoto]}
                     alt={items[productId].name}
                     className='w-full h-full object-cover'
                  />
               )}
            </div>
            <div className=' shrink-0 overflow-x-auto whitespace-nowrap min-w-full'>
               {items[productId] &&
                  items[productId].images &&
                  items[productId].images.map((img, i) => {
                     return (
                        <div
                           key={img}
                           className={`cursor-pointer rounded-xl overflow-hidden h-32 w-24 inline-block m-2 outline-2 outline-offset-2  ${
                              activePhoto === i ? 'outline' : ''
                           } `}
                           onClick={() => setActivePhoto(i)}
                        >
                           <Image
                              src={img}
                              className='w-full h-full object-cover'
                              alt={items[productId].name}
                           />
                        </div>
                     )
                  })}
            </div>
         </div>
         <div className='flex flex-col gap-4'>
            <h2 className='text-3xl font-semibold'>{items[productId].name}</h2>
            <p className=''>{items[productId].description}</p>
            <div className='flex  gap-3'>
               <Rating value={items[productId].rating} />
            </div>
            <div className='flex justify-between mt-auto'>
               <span className='text-2xl font-bold'>
                  ${items[productId].price}
               </span>
            </div>
            {!cartItems.find(item => item.id === items[productId].id) ? (
               <Button
                  onClick={() => dispatch(addToCart(items[productId]))}
                  label={
                     <>
                        <span className='fa-solid fa-cart-shopping'></span>
                        <span>Add to cart</span>
                     </>
                  }
               />
            ) : (
               <Button
                  onClick={() => dispatch(removeCartItem(items[productId].id))}
                  secondary={true}
                  label={
                     <>
                        <span className='fa-solid fa-xmark'></span>
                        <span>Remove from cart</span>
                     </>
                  }
               />
            )}
         </div>
      </section>
   )
}
export default ProductDetails
