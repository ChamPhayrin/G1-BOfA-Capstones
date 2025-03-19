const connection = require("../configs/dbconfig.cjs");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const query = 'SELECT id, username, email FROM users WHERE role_id = 3';
    const [allUsers] = await connection.execute(query);
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a single user by ID
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "ID is required." });

    const query = 'SELECT id, username, email, created_at FROM users WHERE id = ?';
    const [user] = await connection.execute(query, [id]);

    if (user.length === 0) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const { id, username } = req.body;
    if (!id || !username) return res.status(400).json({ message: "ID and username are required." });

    const query = 'UPDATE users SET username = ? WHERE id = ?';
    const [result] = await connection.execute(query, [username, id]);

    if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // Get id from URL params
    if (!id) return res.status(400).json({ message: "ID is required." });

    const query = 'DELETE FROM users WHERE id = ?';
    await connection.execute(query, [id]);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser };