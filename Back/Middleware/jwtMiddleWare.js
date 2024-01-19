const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.body.token;

  if (!token) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    next();
  });
}