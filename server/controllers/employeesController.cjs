const connection = require("../configs/dbconfig.cjs");
const { handleNewUser } = require("../controllers/registerController.cjs"); // Import handleNewUser

const getAllEmployees = async (req, res) => {
  try {
    // Selects all from users table
    const query = 'SELECT id, username, email FROM users WHERE role_id = 3';
    const [allEmployees] = await connection.execute(query);

    // Send the results back to the client
    res.status(200).json(allEmployees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createEmployee = async (req, res) => {
  try {
    // Call handleNewUser with role_id = 3 (for employees)
    await handleNewUser(req, res, 3);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteEmployee = async (req, res)=>{
  try{
    const { id } = req.body;

    // Validate input
    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const getEmployeeQ = 'SELECT * FROM users WHERE id = ?';
    const [employee] = await connection.execute(getEmployeeQ, [id]);

    if (employee.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const deleteEmployeeQ = 'DELETE FROM users WHERE id = ?';
    await connection.execute(deleteEmployeeQ, [id]);

    res.status(200).json({ message: "Employee deleted successfully" });
  }catch(error){
    console.error('Error deleting employee:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate input
    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const getEmployeeQ = 'SELECT id, username, email FROM users WHERE id = ?';
    const [employee] = await connection.execute(getEmployeeQ, [id]);

    if (employee.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee[0]);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllEmployees, createEmployee, deleteEmployee, getEmployee };