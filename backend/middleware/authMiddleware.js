// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  const bearer = req.header('Authorization');
  const [, token] = bearer.split(" ")
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: 'Invalid token' });
  }
};
