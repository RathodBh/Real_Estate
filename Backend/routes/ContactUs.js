const router = require("express").Router();
// let ContactUsDB = require("../models/contactUs.models.js");
let ContactUsDB = require("../models/contactUs.models.js");
console.log(ContactUsDB);
router.route("/").get((req, res) => {
  ContactUsDB.findOne()
    .then((ContactUs) => res.json(ContactUs))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
