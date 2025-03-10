const express = require("express");
const router = express.Router();
const employeesController = require("../../controllers/employeesController.cjs");
const verifyRoles = require("../../middleware/verifyRoles.cjs")


// Routes
router.route("/")
  .get(verifyRoles(5150), employeesController.getAllEmployees) // Admin only
  .post(verifyRoles(5150), employeesController.createEmployee) // Admin only
  .delete(verifyRoles(5150), employeesController.deleteEmployee) // Admin only


router.route("/:id")
  .get(verifyRoles(5150), employeesController.getEmployee); // Admin only

module.exports = router;