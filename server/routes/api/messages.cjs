const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Import the contact controller and the verifyRoles middleware
const messagesController = require('../../controllers/messagesController.cjs');
const verifyRoles = require("../../middleware/verifyRoles.cjs");

// Routes for contact submissions
router.route("/")
  .get(verifyRoles(5150), messagesController.getAllContactSubmissions)  // Only admins can get all submissions
  .post(messagesController.createContactSubmission);  // Anyone can submit a message

router.route("/:id")  
  .get(verifyRoles(5150), messagesController.getContactSubmissionById)  // Only admins can get a specific submission
  .put(verifyRoles(5150), messagesController.updateContactSubmission)  
  .delete(verifyRoles(5150), messagesController.deleteContactSubmission);


module.exports = router; // Export the router
