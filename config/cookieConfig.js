const cookieConfig = {
   refToken: {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'development' ? 'none' : 'strict',
      path: '/api/auth/verify',
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
   },
   refTokenExp: {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'development' ? 'none' : 'strict',
      path: '/api/auth/verify',
      secure: true,
      expires: new Date(Date.now() - 1000),
   },
}

module.exports = cookieConfig
