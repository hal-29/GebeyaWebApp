import { useEffect } from 'react'
import ProductsList from '../features/products/ProductsList'

function Product() {
   useEffect(() => {
      document.title = 'Products'
   })
   return <ProductsList />
}
export default Product
