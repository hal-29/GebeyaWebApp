const express = require('express')
const router = express.Router()

router.get('/cb', (req, res) => {
   console.log(req.session)
   console.log('Callback')
   res.send('Callback')
})

router.get('/login', (req, res) => {
   console.log('Login')
   res.send('Login')
})

module.exports = router
