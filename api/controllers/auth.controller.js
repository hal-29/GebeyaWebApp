const { z } = require('zod')
const ERRORS = require('../../config/errors')
const generateToken = require('../../helpers/generateToken')
const formatResponse = require('../../utils/formatResponse')
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieConfig = require('../../config/cookieConfig')

const userSchema = z.object({
   name: z.string().min(3).max(50),
   email: z.string().email(),
   password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
   address: z.string().optional(),
})

async function loginUser(req, res, next) {
   const { email, password } = req.body
   if (!email || !password) return next(ERRORS.wrongEmailOrPassword)

   const user = await User.findOne({
      email,
   })

   if (!user) return next(ERRORS.wrongEmailOrPassword)

   const isMatch = await bcrypt.compare(password, user.password)
   if (!isMatch) return next(ERRORS.wrongEmailOrPassword)

   const accessToken = await generateToken(user.id, 'access')
   const refreshToken = await generateToken(user.id, 'refresh')

   res.cookie('refToken', refreshToken, cookieConfig.refToken)

   const userData = user.toObject()
   delete userData.password

   res.json(formatResponse({ data: userData, token: accessToken }))
}

async function registerUser(req, res, next) {
   const safeData = userSchema.safeParse(req.body)
   if (!safeData.success) return next(ERRORS.invalidCrediential)

   if (await User.findOne({ email: safeData.data.email }))
      return next(ERRORS.dbDuplicateEntry)

   const hashedPassword = await bcrypt.hash(safeData.data.password, 10)

   const newUser = (
      await new User({
         name: safeData.data.name,
         email: safeData.data.email,
         password: hashedPassword,
         address: safeData.data.address,
      }).save()
   ).toObject()
   delete newUser.password

   const accessToken = await generateToken(newUser.id, 'access')
   const refreshToken = await generateToken(newUser.id, 'refresh')

   res.cookie('refToken', refreshToken, cookieConfig.refToken)

   res.json(formatResponse({ data: newUser, token: accessToken }))
}

async function logoutUser(_, res, _) {
   res.cookie('refToken', '', cookieConfig.refTokenExp)
   res.sendStatus(204)
}

async function verifyUser(req, res, next) {
   const refToken = req.cookies?.refToken
   if (!refToken) return next(ERRORS.BAD_REQUEST)

   const secretKey = process.env.JWT_REFRESH_KEY
   if (!secretKey) throw new Error('JWT refresh key not found')

   let verified
   try {
      verified = jwt.verify(refToken, secretKey)
   } catch (error) {
      return next(ERRORS.invalidToken)
   }

   const user = (
      await User.findById(verified.id).select('-password')
   )?.toObject()

   if (!user) return next(ERRORS.invalidToken)

   const accessToken = await generateToken(user.id, 'access')
   const refreshToken = await generateToken(user.id, 'refresh')

   res.cookie('refToken', refreshToken, cookieConfig.refToken)

   res.json(formatResponse({ data: user, token: accessToken }))
}

module.exports = {
   loginUser,
   registerUser,
   logoutUser,
   verifyUser,
}
