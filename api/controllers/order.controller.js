const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Order = require('../models/order.model')
const Product = require('../models/product.model')

async function getOrders(req, res, next) {
   const orders = await Order.find({ client: req.userId }).populate(
      'products',
      'category name'
   )
   res.status(200).json(orders)
}

async function orderProduct(req, res, next) {
   const { products } = req.body

   const productIds = products.map(prod => prod.id)
   const productReferences = await Product.find({ _id: { $in: productIds } })
   const referenced = productReferences.map(ref => ({
      name: ref.name,
      price: ref.price * 1.16,
      images: ref.images,
      count: products.find(pr => pr.id === ref.id.toString()).count,
   }))

   const lineItems = referenced.map(product => ({
      price_data: {
         currency: 'usd',
         product_data: {
            name: product.name,
            images: product.images,
         },
         unit_amount: Math.round(product.price * 100),
      },
      quantity: product.count,
   }))

   const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: process.env.FRONTEND_URL,
   })

   const order = new Order({
      client: req.userId,
      products: productIds,
      price: referenced.reduce((cur, ref) => cur + ref.price, 0),
   })

   const newOrder = await order.save()
   res.status(200).json({ id: session.id, order: newOrder })
}

module.exports = { orderProduct, getOrders }
