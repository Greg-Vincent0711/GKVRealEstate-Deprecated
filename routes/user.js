const express = require("express");

//breaking up routes for the server
const router = express.Router();

/**two new nested routes */
router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

module.exports = router;
