const express = require("express");
const router = express.Router();
const messagesController = require('../../controllers/messagesController.cjs');
const verifyRoles = require("../../middleware/verifyRoles.cjs");

router.route("/")
  .get(verifyRoles(5150), messagesController.getAllContactSubmissions)
  .post(messagesController.createContactSubmission);

router.route("/:id")
  .get(verifyRoles(5150), messagesController.getContactSubmissionById)
  .delete(verifyRoles(5150), messagesController.deleteContactSubmission);

module.exports = router;