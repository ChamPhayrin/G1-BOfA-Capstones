const usersDB = {
	users: require("../../data/users.json"),
	setUsers: function (data) {
		this.users = data;
	},
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ message: "Username and password are required." });

  const foundUser = usersDB.users.find(person => person.username === user);
  if (!foundUser) return res.sendStatus(401); // Unauthorized

  const match = await bcrypt.compare(pwd, foundUser.password);
  if (!match) return res.sendStatus(401); // Unauthorized

  const roles = Object.values(foundUser.roles);
  const accessToken = jwt.sign(
    {
      "UserInfo": {
        "username": foundUser.username,
        "roles": roles
      }
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '30s' }
  );

  const refreshToken = jwt.sign(
    { "username": foundUser.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' }
  );

  // Save refreshToken with current user
  const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
  const currentUser = { ...foundUser, refreshToken }; // Update the user's refreshToken
  usersDB.setUsers([...otherUsers, currentUser]);

  await fsPromises.writeFile(
    path.join('../../data/users.json'),
    JSON.stringify(usersDB.users)
  );

  res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
  res.json({ accessToken });
};

module.exports = { handleLogin };