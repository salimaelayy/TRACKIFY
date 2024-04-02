const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const accessToken = req.cookies ? req.cookies['access-token'] : null;
  if (!accessToken) {
    return res.status(401).json({ message: 'User not authenticated' });
  }
  try {
    const validToken = verify(accessToken, process.env.SECRETTOKEN);
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    console.error('Error validating token:', err.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

module.exports = { validateToken };
