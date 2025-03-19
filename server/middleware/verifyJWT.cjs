const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // Check if the authorization header is present and starts with 'Bearer '
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: Missing or invalid token' });
  }

  // Extract the token from the authorization header
  const token = authHeader.split(' ')[1];

  // Verify the token
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        console.error('JWT verification error:', err);
        return res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
      }

      // Attach the decoded user information to the request object
      req.user = decoded.UserInfo.username;
      req.roles = [decoded.UserInfo.role_code]; // Attach the role_code as an array

      // Debugging: Log the decoded payload and attached roles

      // Proceed to the next middleware
      next();
    }
  );
};

module.exports = { verifyJWT };