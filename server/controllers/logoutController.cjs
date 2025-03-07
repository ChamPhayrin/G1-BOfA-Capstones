const userDB = {
  users: require("../../data/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {

  if (!req.cookies?.jwt) return res.sendStatus(204); // No content
  const refreshToken = req.cookies.jwt;

  // Is refreshToken in db?
  const foundUser = userDB.users.find(person => person.refreshToken === refreshToken);
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true});
    return res.sendStatus(204);
  }

  // Delete refreshToken in db
  const otherUsers = userDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
  const currentUser = { ...foundUser, refreshToken: '' };
  userDB.setUsers([...otherUsers, currentUser]);
  await fsPromises.writeFile(
    path.join('/Users/ChamngaryPhayrin/Desktop/auth-tut/data/users.json'),
    JSON.stringify(userDB.users)
  );

  res.clearCookie('jwt', { httpOnly: true});
  res.sendStatus(204);
};

module.exports = { handleLogout };