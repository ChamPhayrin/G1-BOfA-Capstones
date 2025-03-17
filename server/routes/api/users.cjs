const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const usersController = require('../../controllers/usersControllers.cjs');
const verifyRoles = require("../../middleware/verifyRoles.cjs");




//routes
router.route("/") 
  .get(verifyRoles(5150), usersController.getAllUsers) 
  .delete(verifyRoles(2001, 5150), usersController.deleteUser);
  router.route("/:id") 
  .put(verifyRoles(2001, 5150), usersController.updateUser)
  .delete(verifyRoles(2001, 5150), usersController.deleteUser);


module.exports = router; //export the router
