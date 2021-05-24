var express = require("express");
var router = express.Router();
let User = require("../models/user");

/* GET home page. */
router.post("/users", async (req, res, next) => {
  try {
    let { email, firstName, lastName, phone } = req.body;
    let checkDetails = await User.findOne({ email: email });
    if (checkDetails) {
      res.send({
        message: "Data is already Exist",
      });
    } else {
      let Data = new User({
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      });
      let saveData = await Data.save();
      res.send(saveData);
    }
  } catch (error) {
    console.log(error);
    res.send({
      message: "An error Occurred",
    });
  }
});

router.get("/getusers", async (req, res, next) => {
  try {
    console.log("data is not coming");
    let data = await User.find({});
    setTimeout(() => {
      res.json({
        data,
        message: "find",
      });
    }, 6000);
  } catch (error) {
    console.log(error);
    res.json({
      message: "not find",
      err: error.message,
    });
  }
});

router.get("/getchart", async (req, res, next) => {
  try {
    setTimeout(() => {
      res.json({
        data: [
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
        ],
        message: "find pie chart data",
      });
    }, 6000);
  } catch (error) {
    console.log(error);
    res.json({
      message: "not find",
      err: error.message,
    });
  }
});
module.exports = router;
