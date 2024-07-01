export const endpoints = {
   // Product endpoints
   getAllProducts: q => `/api/product?${new URLSearchParams(q).toString()}`,
   getProduct: id => `/api/product/${id}`,
   createProduct: () => '/api/product',
   updateProduct: id => `/api/product/${id}`,
   deleteProduct: id => `/api/product/${id}`,
   searchProducts: q =>
      `/api/product/search?${new URLSearchParams(q).toString()}}`,
   getCategories: q =>
      `/api/product/categories?${new URLSearchParams(q).toString()}}`,
   getTrendings: q =>
      `/api/product/trendings?${new URLSearchParams(q).toString()}}`,
   getSpecials: q =>
      `/api/product/specials?${new URLSearchParams(q).toString()}}`,

   // Order endpoints
   getAllOrders: q => `/api/order?${new URLSearchParams(q).toString()}`,
   getOrder: id => `/api/order/${id}`,
   createOrder: () => '/api/order',

   // Wishlist endpoints
   getAllWishlists: q => `/api/wishlist?${new URLSearchParams(q).toString()}}`,
   createWishlist: () => '/api/wishlist',
   deleteWishlist: id => `/api/wishlist/${id}`,
   deleteAllWishList: () => '/api/wishlist',

   // Auth endpoints
   login: () => '/api/auth/login',
   register: () => '/api/auth/register',
   logout: () => '/api/auth/logout',
   verify: () => '/api/auth/verify',
}
