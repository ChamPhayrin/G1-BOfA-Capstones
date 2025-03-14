const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const connection = require("../configs/dbconfig.cjs");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;

  // Validate input
  if (!user || !pwd) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  try {
    // Find the user in the database
    const query = `
      SELECT u.*, r.role_code 
      FROM users u
      JOIN roles r ON u.role_id = r.id
      WHERE u.username = ?
    `;
    const [rows] = await connection.execute(query, [user]);

    // Check if the user exists
    if (rows.length === 0) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    const foundUser = rows[0];

    // Compare the password
    const match = await bcrypt.compare(pwd, foundUser.password_hash);
    if (!match) {
      return res.status(401).json({ message: "Unauthorized: Incorrect password" });
    }

    // Generate access token
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          role_code: foundUser.role_code, // Include role_code in the token payload
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" } // Access token expires in 15 minutes
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" } // Refresh token expires in 1 day
    );

    // Save the refresh token in the database
    const updateRefreshTokenQuery = 'UPDATE users SET refreshToken = ? WHERE username = ?';
    await connection.execute(updateRefreshTokenQuery, [refreshToken, foundUser.username]);

    // Set the refresh token in an HTTP-only cookie
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Send cookie only over HTTPS in production
      sameSite: 'Strict', // Prevent CSRF attacks
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send the access token in the response
    res.json({ role_code: foundUser.role_code, accessToken });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { handleLogin };