const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { z } = require("zod");
const Order = require("../models/order.model");
const Product = require("../models/product.model");
const sendResponse = require("../../utils/formatResponse");
const formatResponse = require("../../utils/formatResponse");
const ERRORS = require("../../config/errors");

const orderSchema = z.object({
  products: z.array(
    z.object({
      id: z.string(),
      quantity: z.number().int().positive(),
    }),
  ),
});

async function getOrders(req, res, next) {
  const orders = await Order.find({ client: req.user.id })
    .select("-client")
    .populate("products.product", "name")
    .sort({ createdAt: -1 })
    .then((orders) => {
      const formattedOrders = orders.map((order) => {
        return {
          id: order._id,
          products: order.products
            .map((product) => product.product.name)
            .join(", "),
          total: order.total,
          status: order.status,
          address: req.user.address,
          createdAt: order.createdAt,
        };
      });
      return formattedOrders;
    });

  res.status(200).json(formatResponse({ data: orders }));
}

async function orderProduct(req, res, next) {
  const { products } = req.body;

  if (!orderSchema.safeParse(req.body).success)
    return next(ERRORS.invalidCrediential);

  const references = await Product.find({
    _id: { $in: products.map((p) => p.id) },
  }).select("price name category image");

  const productIds = references.map((p) => p.id.toString());
  for (const product of products) {
    if (product.quantity < 1 || !productIds.includes(product.id)) {
      return res.status(400).json({ message: "Invalid request" });
    }
  }

  const total = references.reduce((acc, product) => {
    const productCount = products.find((p) => p.id === product.id).quantity;
    return acc + product.price * productCount;
  }, 0);

  const order = new Order({
    client: req.user.id,
    products: products.map((p) => ({
      product: p.id,
      quantity: p.quantity,
    })),
    total,
  });

  await order.save();

  references.forEach(async (p) => {
    await Product.findByIdAndUpdate(p.id, {
      $inc: { sold: products.find((pr) => pr.id === p.id).quantity },
    });
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: references.map((p) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: p.name,
        },
        unit_amount: p.price * 100,
      },
      quantity: products.find((pr) => pr.id === p.id).quantity,
    })),
    mode: "payment",
    metadata: { order_id: order.id.toString() },
    success_url: `${process.env.URL}/orders`,
    cancel_url: `${process.env.URL}/products`,
  });

  res
    .status(201)
    .json(sendResponse({ data: order, url: session.url, status: 201 }));
}

async function getOrderById(req, res) {
  const order = await Order.findOne({
    _id: req.params.id,
    client: req.user.id,
  })
    .select("-client")
    .populate("products.product", "name")
    .then((order) => {
      return {
        id: order._id,
        products: order.products.map((product) => {
          return {
            name: product.product.name,
            quantity: product.quantity,
            image: product.product.image,
            id: product.product._id,
          };
        }),
        total: order.total,
        createdAt: order.createdAt,
      };
    });

  if (!order) return next(ERRORS.notFound);

  res.status(200).json(order);
}

async function webhook(req, res) {
  const sig = req.headers["stripe-signature"];
  const event = stripe.webhooks.constructEvent(
    req.body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    if (session.payment_status === "paid") {
      await Order.findByIdAndUpdate(session.metadata.order_id, {
        status: "completed",
      });
    }
  }

  res.sendStatus(200);
}

module.exports = { orderProduct, getOrders, getOrderById, webhook };
