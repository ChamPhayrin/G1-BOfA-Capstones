// register.cjs
const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController.cjs");

// Route for user registration
router.post('/', registerController.handleNewUser);

module.exports = router; 