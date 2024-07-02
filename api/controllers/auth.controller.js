const { z } = require('zod')
const ERRORS = require('../../config/errors')
const generateToken = require('../../helpers/generateToken')
const sendResponse = require('../../utils/sendResponse')
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = z.object({
   name: z.string().min(3).max(50),
   email: z.string().email(),
   password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
   address: z.string().optional(),
})

async function loginUser(req, res, next) {
   const { email, password } = req.body
   if (!email || !password) return next(ERRORS.BAD_REQUEST)

   const user = await User.findOne({
      email,
   })

   if (!user) return next(ERRORS.WRONG_EMAIL_OR_PASSWORD)

   const isMatch = await bcrypt.compare(password, user.password)
   if (!isMatch) return next(ERRORS.WRONG_EMAIL_OR_PASSWORD)

   const accessToken = await generateToken(user.id, 'access')
   const refreshToken = await generateToken(user.id, 'refresh')

   res.cookie('refToken', refreshToken, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'development' ? 'none' : 'strict',
      path: '/api/auth/verify',
      secure: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
   })

   const userData = user.toObject()
   delete userData.password

   res.json(sendResponse({ data: userData, token: accessToken }))
}

async function registerUser(req, res, next) {
   const safeData = userSchema.safeParse(req.body)
   if (!safeData.success) return next(ERRORS.INVALID_CREDIENTIAL)

   const { name, email, password, address } = safeData.data

   if (await User.findOne({ email })) return next(ERRORS.DB_DUPLICATE_ENTRY)

   const hashedPassword = await bcrypt.hash(password, 10)

   const user = new User({
      name,
      email,
      password: hashedPassword,
      address,
   })

   const newUser = (await user.save())?.toObject()
   if (!newUser) return next(ERRORS.SERVER_FAILED)
   delete newUser.password

   const accessToken = await generateToken(newUser.id, 'access')
   const refreshToken = await generateToken(newUser.id, 'refresh')

   res.cookie('refToken', refreshToken, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'development' ? 'none' : 'strict',
      path: '/api/auth/verify',
      secure: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
   })

   res.json(sendResponse({ data: newUser, token: accessToken }))
}

async function logoutUser(_, res, _) {
   res.cookie('refToken', '', {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'development' ? 'none' : 'strict',
      path: '/api/auth/verify',
      secure: true,
      expires: new Date(Date.now() - 1000),
   })

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
      console.error(error)
      return next(ERRORS.INVALID_TOKEN)
   }

   const user = await User.findById(verified.id).select('-password')

   if (!user) return next(ERRORS.BAD_REQUEST)

   const accessToken = await generateToken(user.id, 'access')
   const refreshToken = await generateToken(user.id, 'refresh')

   res.cookie('refToken', refreshToken, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'development' ? 'none' : 'strict',
      path: '/api/auth/verify',
      secure: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
   })

   res.json(sendResponse({ data: user, token: accessToken }))
}

module.exports = {
   loginUser,
   registerUser,
   logoutUser,
   verifyUser,
}
