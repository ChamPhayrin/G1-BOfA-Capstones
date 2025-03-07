const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const usersController = require('../../controllers/usersControllers.cjs');
const ROLES_LIST = require("../../configs/roles_list.cjs");
const verifyRoles = require("../../middleware/verifyRoles.cjs");




//routes
router.route("/") //allows you to define multiple requests on the same route
  .get(usersController.getAllUsers)
  .post(usersController.createUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);
router.route("/:id") //parameter in url 
  .get(usersController.getUser);

module.exports = router; //export the router
