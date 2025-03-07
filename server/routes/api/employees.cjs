const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const path = require("path");
const employeesController = require("../../controllers/employeesController.cjs");
const ROLES_LIST = require("../../configs/roles_list.cjs");
const verifyRoles = require("../../middleware/verifyRoles.cjs");




//routes
router.route("/") //allows you to define multiple requests on the same route
  .get(employeesController.getAllEmployees)
  .post(verifyRoles(ROLES_LIST.admin), employeesController.createEmployee)
  .put(verifyRoles(ROLES_LIST.admin), employeesController.updateEmployee)
  .delete(verifyRoles(ROLES_LIST.admin), employeesController.deleteEmployee);
router.route("/:id") //parameter in url 
  .get(employeesController.getEmployee);

module.exports = router; //export the router
