const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const connection = require("../configs/dbconfig.cjs");

const handleNewUser = async (req, res, specifiedRoleID) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide username, email, and password' });
  }

  try {
    // Check for duplicate username or email
    const duplicateQ = 'SELECT * FROM users WHERE username = ? OR email = ?';
    const [rows] = await connection.execute(duplicateQ, [username, email]);

    if (rows.length > 0) {
      return res.status(409).json({ message: 'Username or email already exists' });
    }

    // Hash the password
    const hashedPwd = await bcrypt.hash(password, 10);

    // Generate a UUID for the user ID
    const userId = uuidv4(); // Generate the UUID here

    // Set role_id: Use specifiedRoleID if provided, otherwise default to 2
    const roleId = specifiedRoleID !== undefined ? specifiedRoleID : 2;

    // Insert the new user into the database
    const insertQ = 'INSERT INTO users (id, username, email, password_hash, role_id) VALUES (?, ?, ?, ?, ?)';
    await connection.execute(insertQ, [userId, username, email, hashedPwd, roleId]);

    // Return success response
    res.status(201).json({ message: 'User created successfully', userId });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { handleNewUser };