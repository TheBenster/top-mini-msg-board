var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Yoo",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Messages", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { title: "new entry" });
});
router.get("/test", (req, res, next) => {
  res.send("test", { title: "new entry" });
});

router.post("/new", (req, res, next) => {
  let message_text = req.body.messageText;
  let user_text = req.body.userText;
  messages.push({
    text: message_text,
    user: user_text,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
