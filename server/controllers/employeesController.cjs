const data = {
  employees: require('../../data/employees.json'),
  setEmployees: (data) => { this.employees = data; }
};

const getAllEmployees = async (req, res) => {
  res.json(data.employees);
}

const createEmployee = async (req, res) => {
  res.json({
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
  })
}

const updateEmployee = async (req, res) => {
  res.json({
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
  })
}

const deleteEmployee = async (req, res) => {
  res.json({
    "id": req.body.id,
  })
}

const getEmployee = async (req, res) => {
  res.json({
    "id": req.params.id,
  })
}

module.exports = { getAllEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee };