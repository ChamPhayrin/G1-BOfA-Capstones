const jwt = require("jsonwebtoken");
require("dotenv").config();
const connection = require("../configs/dbconfig.cjs");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  // Check if the JWT cookie exists
  if (!cookies?.jwt) {
    return res.status(401).json({ message: "Unauthorized: No refresh token provided" });
  }

  const refreshToken = cookies.jwt;

  try {
    // Find the user with the given refreshToken in the database
    const query = 'SELECT * FROM users WHERE refreshToken = ?';
    const [rows] = await connection.execute(query, [refreshToken]);

    // Check if the user exists
    if (rows.length === 0) {
      return res.status(403).json({ message: "Forbidden: Invalid refresh token" });
    }

    const foundUser = rows[0];

    // Verify the refresh token
    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });

    // Check if the decoded username matches the user's username
    if (foundUser.username !== decoded.username) {
      return res.status(403).json({ message: "Forbidden: Invalid refresh token" });
    }

    // Get the user's role_code from the roles table
    const rolesQuery = 'SELECT role_code FROM roles WHERE id = ?';
    const [rolesRows] = await connection.execute(rolesQuery, [foundUser.role_id]);

    if (rolesRows.length === 0) {
      return res.status(403).json({ message: "Forbidden: Role not found" });
    }

    const roleCode = rolesRows[0].role_code;

    // Generate a new access token
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          userId: foundUser.id,
          role_code: roleCode,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" } // Access token expires in 15 minutes
    );

    // Send the new access token in the response
    res.json({ accessToken });
  } catch (error) {
    console.error('Error during refresh token handling:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { handleRefreshToken };