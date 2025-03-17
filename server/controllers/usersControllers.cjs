const connection = require("../configs/dbconfig.cjs");

const getAllUsers = async (req, res) => {
  try {
    // Selects all from users table
    const query = 'SELECT id, username, email FROM users WHERE role_id = 2';
    const [allUsers] = await connection.execute(query);

    // Send the results back to the client
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, username } = req.body;

    // Validate input
    if (!id || !username) {
      return res.status(400).json({ message: "ID and username are required." });
    }

    const updateUserQ = 'UPDATE users SET username = ? WHERE id = ?';
    await connection.execute(updateUserQ, [username, id]);

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;

    // Validate input
    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    } 

    const getUserQ = 'SELECT * FROM users WHERE id = ?';
    const [user] = await connection.execute(getUserQ, [id]);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const deleteUserQ = 'DELETE FROM users WHERE id = ?';
    await connection.execute(deleteUserQ, [id]);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate input
    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const getUserQ = 'SELECT id, username, email FROM users WHERE id = ?';
    const [user] = await connection.execute(getUserQ, [id]);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};