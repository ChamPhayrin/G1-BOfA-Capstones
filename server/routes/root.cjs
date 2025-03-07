const express = require("express");
const router = express.Router();


//routes 
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/about", (req, res) => {
  res.send("About Us");
});



module.exports = router;