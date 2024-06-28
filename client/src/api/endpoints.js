export const endpoints = {
   // Product endpoints
   getAllProducts: q => `/api/product${q || ''}`,
   getProduct: id => `/api/product/${id}`,
   createProduct: () => '/api/product',
   updateProduct: id => `/api/product/${id}`,
   deleteProduct: id => `/api/product/${id}`,
   searchProducts: q => `/api/product/search${q || ''}`,
   getCategories: q => `/api/product/categories${q || ''}`,
   getTrendings: q => `/api/product/trendings${q || ''}`,
   getSpecials: q => `/api/product/specials${q || ''}`,

   // Order endpoints
   getAllOrders: q => `/api/order${q || ''}`,
   getOrder: id => `/api/order/${id}`,
   createOrder: () => '/api/order',

   // Wishlist endpoints
   getAllWishlists: q => `/api/wishlist${q || ''}`,
   createWishlist: () => '/api/wishlist',
   deleteWishlist: id => `/api/wishlist/${id}`,
   deleteAllWishList: () => '/api/wishlist',
}
