var express = require("express");
var router = express.Router();

router.get("/ping", function (req, res) {
  console.log("v1 ping: req.query", req.query);
  res.send("pong");
});

module.exports = router;
