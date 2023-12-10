async function addToWishList(req, res, next) {
   const id = req.params.productId
   res.send('added to wishlist')
}
async function removeAllWishList(req, res, next) {
   res.send('removed')
}
async function removeWishList(req, res, next) {
   res.send('removed')
}

module.exports = { addToWishList, removeAllWishList, removeWishList }
