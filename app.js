const express = require("express");
const app = express();
const studentRouter = require("./routes/studentRouter");
const db = require("./utils/db-connection");
const courseRouter = require("./routes/courseRouter");
require("./model");
app.use(express.json());
app.use("/student", studentRouter);
app.use("/course", courseRouter);
db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
