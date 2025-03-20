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
          userId: foundUser.id,
          role_code: foundUser.role_code,
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

    // Set the access token in a cookie
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // HTTPS in production
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000, // 15 minutes (matches access token expiry)
    });

    // Set the refresh token in an HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // HTTPS in production
      sameSite: 'Strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 day (matches refresh token expiry)
    });

    // Set user ID and role in cookies (optional, if needed)
    res.cookie("userId", foundUser.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.cookie("role_code", foundUser.role_code, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send a success response (no data in the body)
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { handleLogin };