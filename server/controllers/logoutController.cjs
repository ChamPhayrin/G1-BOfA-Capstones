const connection = require("../configs/dbconfig.cjs");

const handleLogout = async (req, res) => {
  // Check if the JWT cookie exists
  if (!req.cookies?.jwt) {
    return res.sendStatus(204); // No content
  }

  const refreshToken = req.cookies.jwt;

  try {
    // Find the user with the given refreshToken in the database
    const query = 'SELECT * FROM users WHERE refreshToken = ?';
    const [rows] = await connection.execute(query, [refreshToken]);

    // If no user is found, clear the cookie and return
    if (rows.length === 0) {
      res.clearCookie('jwt', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Ensure secure cookie in production
        sameSite: 'Strict', // Prevent CSRF attacks
      });
      return res.sendStatus(204);
    }

    const foundUser = rows[0];

    // Clear the refreshToken in the database
    const updateQuery = 'UPDATE users SET refreshToken = NULL WHERE id = ?';
    await connection.execute(updateQuery, [foundUser.id]);

    // Clear the JWT cookie
    res.clearCookie('jwt', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensure secure cookie in production
      sameSite: 'Strict', // Prevent CSRF attacks
    });

    // Send a success response
    res.sendStatus(204);
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { handleLogout };