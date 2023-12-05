const { faker } = require('@faker-js/faker')
const mongoose = require('mongoose')
const Product = require('./api/models/product.model.js')

mongoose.connect('mongodb://192.168.228.78:27017/emarket')
const electronicDevicesData = [
   {
      name: 'Smartphone X1',
      company: 'TechCo',
      price: 699.99,
      category: 'Phone',
   },
   {
      name: 'Laptop ProBook',
      company: 'ElectroTech',
      price: 1299.99,
      category: 'Laptop',
   },
   {
      name: 'Wireless Earpods 2000',
      company: 'AudioMasters',
      price: 129.99,
      category: 'EarPods',
   },
   {
      name: 'VR Experience Plus',
      company: 'VirtualTech',
      price: 399.99,
      category: 'VR Headset',
   },
   {
      name: 'Noise-Canceling Headphones',
      company: 'SoundSolutions',
      price: 199.99,
      category: 'Headphones',
   },
   {
      name: 'Smartwatch Elite',
      company: 'Gadget Innovations',
      price: 299.99,
      category: 'Watch',
   },
   {
      name: 'UltraBook Pro',
      company: 'TechMasters',
      price: 1599.99,
      category: 'Laptop',
   },
   {
      name: 'Wireless Earbuds 3000',
      company: 'AudioInnovate',
      price: 149.99,
      category: 'EarPods',
   },
   {
      name: 'VR Deluxe Edition',
      company: 'VirtualRealityTech',
      price: 499.99,
      category: 'VR Headset',
   },
   {
      name: 'Hi-Fi Over-Ear Headphones',
      company: 'AudioBliss',
      price: 249.99,
      category: 'Headphones',
   },
   {
      name: 'Smartwatch Pro Series',
      company: 'GadgetGenius',
      price: 349.99,
      category: 'Watch',
   },
   {
      name: 'Gaming Laptop Xtreme',
      company: 'GameTech',
      price: 1999.99,
      category: 'Laptop',
   },
   {
      name: 'True Wireless Earpods',
      company: 'AudioInnovations',
      price: 179.99,
      category: 'EarPods',
   },
   {
      name: 'Immersive VR Experience',
      company: 'VRWorld',
      price: 599.99,
      category: 'VR Headset',
   },
   {
      name: 'Noise-Canceling Bluetooth Headphones',
      company: 'SonicSolutions',
      price: 279.99,
      category: 'Headphones',
   },
   {
      name: 'Sports Smartwatch',
      company: 'FitnessTech',
      price: 159.99,
      category: 'Watch',
   },
]

const brands = [
   'apple',
   'samsung',
   'xiaomi',
   'tecno',
   'infinix',
   'huawei',
   'hp',
   'toshiba',
   'asus',
]
const category = ['phone', 'laptop', 'watch', 'earpod', 'vr', 'headphone']

const randm = arr => arr[Math.floor(arr.length * Math.random())]

const generateDummyProducts = count => {
   const products = []

   for (let i = 0; i < count; i++) {
      const device = randm(electronicDevicesData)

      const product = new Product({
         name: device.name,
         description: faker.lorem.paragraph(),
         price: device.price,
         category: randm(category),
         brand: randm(brands),
         stock: Math.ceil(9 + 90 * Math.random()),
         rating: (5 * Math.random()).toFixed(1),
         images: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/300/200',
            'https://picsum.photos/400/200',
         ],
      })

      products.push(product)
   }

   return products
}

const populateDatabase = async () => {
   try {
      await Product.deleteMany() // Clear existing data

      const dummyProducts = generateDummyProducts(200) // Adjust the count as needed
      await Product.insertMany(dummyProducts)

      console.log('Dummy data populated successfully!')
   } catch (error) {
      console.error('Error populating dummy data:', error)
   } finally {
      mongoose.disconnect()
   }
}

populateDatabase()
