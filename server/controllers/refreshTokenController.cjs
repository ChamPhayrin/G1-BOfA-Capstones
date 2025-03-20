const jwt = require("jsonwebtoken");
require("dotenv").config();
const connection = require("../configs/dbconfig.cjs");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.refreshToken) {
    return res.status(401).json({ message: "Unauthorized: No refresh token" });
  }

  const refreshToken = cookies.refreshToken;

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const query = "SELECT * FROM users WHERE username = ?";
    const [rows] = await connection.execute(query, [decoded.username]);

    if (rows.length === 0) {
      return res.status(403).json({ message: "Forbidden: User not found" });
    }

    const foundUser = rows[0];

    if (refreshToken !== foundUser.refreshToken) {
      return res.status(403).json({ message: "Forbidden: Invalid refresh token" });
    }

    // Generate a new access token
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          userId: foundUser.id,
          role_code: foundUser.role_code,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    // Set the new access token in a cookie
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.status(200).json({ message: "Access token refreshed" });
  } catch (error) {
    console.error("Error refreshing token:", error);
    res.status(403).json({ message: "Forbidden: Invalid refresh token" });
  }
};

module.exports = { handleRefreshToken };