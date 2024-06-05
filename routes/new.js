var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.send("test");
  } catch (err) {
    next(err);
  }
});

// router.get("/", (req, res, next) => {
//   res.render("form");
// });

// router.post("/", (req, res) => {
//   messages.push({ text: messageText, user: userText, added: new Date() });
// });

module.exports = router;
