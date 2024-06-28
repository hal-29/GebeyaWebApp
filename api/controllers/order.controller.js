const { z } = require('zod')
const Order = require('../models/order.model')
const Product = require('../models/product.model')

const orderSchema = z.object({
   products: z.array(
      z.object({
         id: z.string(),
         count: z.number().int().positive(),
      })
   ),
})

async function getOrders(req, res, next) {
   const orders = await Order.find({ client: req.userId }).populate(
      'products',
      'product quantity'
   )
   res.status(200).json(orders)
}

async function orderProduct(req, res, next) {
   const { products } = req.body

   if (!orderSchema.safeParse(req.body).success) {
      return res.status(400).json({ message: 'Invalid request' })
   }

   const references = await Product.find({
      _id: { $in: products.map(p => p.id) },
   }).select('price name category image')

   const productIds = references.map(p => p.id.toString())

   for (const product of products) {
      if (product.count < 1 || !productIds.includes(product.id)) {
         return res.status(400).json({ message: 'Invalid request' })
      }
   }

   const total = references.reduce((acc, product) => {
      const productCount = products.find(p => p.id === product.id).count
      return acc + product.price * productCount
   }, 0)

   const order = new Order({
      client: req.userId,
      products: products.map(p => ({
         product: p.id,
         quantity: p.count,
      })),
      total,
   })

   await order.save()

   references.forEach(async p => {
      await Product.findByIdAndUpdate(p.id, {
         $inc: { sold: products.find(pr => pr.id === p.id).count },
      })
   })

   res.status(201).json(order)
}

async function getOrderById(req, res, next) {
   const order = await Order.findById(req.params.id).populate(
      'products',
      'category name'
   )
   res.status(200).json(order)
}

module.exports = { orderProduct, getOrders, getOrderById }
