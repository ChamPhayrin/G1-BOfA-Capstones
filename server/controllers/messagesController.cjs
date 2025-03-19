const connection = require("../configs/dbconfig.cjs");

const getAllContactSubmissions = async (req, res) => {
  try {
    const query = 'SELECT id, name, email, subject, message, status, created_at FROM contact_submissions';
    const [submissions] = await connection.execute(query);
    res.status(200).json(submissions);
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getContactSubmissionById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const getSubmissionQ = 'SELECT id, name, email, subject, message, status, created_at FROM contact_submissions WHERE id = ?';
    const [submission] = await connection.execute(getSubmissionQ, [id]);

    if (submission.length === 0) {
      return res.status(404).json({ message: "Contact submission not found" });
    }

    res.status(200).json(submission[0]);
  } catch (error) {
    console.error("Error fetching contact submission:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createContactSubmission = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const insertQuery = `
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await connection.execute(insertQuery, [name, email, subject, message]);

    res.status(201).json({ message: "Contact submission created successfully", id: result.insertId });
  } catch (error) {
    console.error("Error creating contact submission:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateContactSubmission = async (req, res) => {
  try {
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(400).json({ message: "ID and status are required." });
    }

    const updateQuery = 'UPDATE contact_submissions SET status = ? WHERE id = ?';
    await connection.execute(updateQuery, [status, id]);

    res.status(200).json({ message: "Contact submission updated successfully" });
  } catch (error) {
    console.error("Error updating contact submission:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteContactSubmission = async (req, res) => {
  try {
    const { id } = req.params; // Get id from URL params

    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const deleteQuery = 'DELETE FROM contact_submissions WHERE id = ?';
    await connection.execute(deleteQuery, [id]);

    res.status(200).json({ message: "Contact submission deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact submission:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllContactSubmissions,
  getContactSubmissionById,
  createContactSubmission,
  updateContactSubmission,
  deleteContactSubmission,
};