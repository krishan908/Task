let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Taskdata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("running");
});

module.exports = db;
