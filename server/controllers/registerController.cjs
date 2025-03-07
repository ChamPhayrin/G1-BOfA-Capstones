const userDB = {
  users: require('../../data/users.json'),
  setUsers: function (data) { this.users = data; }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bycrypt = require('bcrypt');
const { use } = require('react');

const handleNewUser = async (req, res) => {
  const {user, pwd}= req.body

  if(!user || !pwd){res.status(400).json({message: 'Please provide username and password'})} //400 Bad Request

  //check duplicate users in DB 
  const duplicateUser = userDB.users.find((person) => person.username === user)
  if (duplicateUser) {
    return res.status(409).json({ message: 'Username already exists' }); // 409 Conflict
  }

  try{
    //encrypt password
    const hashedPwd = await bycrypt.hash(pwd, 10);
    //store new user
    const newUser = {
      username: user, 
      role: {
        user: 2001
      },
      password: hashedPwd
    };
    userDB.setUsers([...userDB.users, newUser]);
    await fsPromises.writeFile(path.join('/Users/ChamngaryPhayrin/Desktop/auth-tut/data/users.json'), JSON.stringify(userDB.users));
  } catch (error){
    res.status(500).json({message: error.message});
  }

}


module.exports = {handleNewUser};