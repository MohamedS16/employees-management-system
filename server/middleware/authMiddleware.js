const jwt = require('jsonwebtoken');
const { errorResponse } = require('../utils/response');


const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return errorResponse(res, 'No token provided', 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return errorResponse(res, 'Invalid or expired token', 403);
  }
};

module.exports = authenticate;
