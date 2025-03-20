const connection = require("../configs/dbconfig.cjs");

const handleLogout = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.refreshToken) {
    return res.status(204).json({ message: "No content" });
  }

  const refreshToken = cookies.refreshToken;

  try {
    const query = "SELECT * FROM users WHERE refreshToken = ?";
    const [rows] = await connection.execute(query, [refreshToken]);

    if (rows.length > 0) {
      const foundUser = rows[0];
      await connection.execute("UPDATE users SET refreshToken = NULL WHERE username = ?", [foundUser.username]);
    }

    // Clear cookies
    res.clearCookie("accessToken", { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' });
    res.clearCookie("refreshToken", { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' });
    res.clearCookie("userId", { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' });
    res.clearCookie("role_code", { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { handleLogout };