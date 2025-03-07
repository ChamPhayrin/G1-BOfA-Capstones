const data = {
  users: require('../../data/users.json'),
  setUsers: (data) => { this.user = data; }
};

const getAllUsers = async (req, res) => {
  res.json(data.user);
}

const createUser = async (req, res) => {
  res.json({
    "username": req.body.user,
  })
}

const updateUser = async (req, res) => {
  res.json({
    "username": req.body.user,
  })
}

const deleteUser = async (req, res) => {
  res.json({
    "id": req.body.id,
  })
}

const getUser = async (req, res) => {
  res.json({
    "id": req.params.id,
  })
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};