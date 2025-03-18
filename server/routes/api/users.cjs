const express = require("express");
const router = express.Router();
const usersController = require('../../controllers/usersControllers.cjs');
const verifyRoles = require("../../middleware/verifyRoles.cjs");

// Routes
router.route("/")
  .get(verifyRoles(5150), usersController.getAllUsers)

router.route("/:id")
  .get(verifyRoles(2001, 5150), usersController.getUser)
  .put(verifyRoles(2001, 5150), usersController.updateUser)
  .delete(verifyRoles(2001, 5150), usersController.deleteUser);

module.exports = router;