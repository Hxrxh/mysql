const express = require("express");
const app = express();
const studentRouter = require("./routes/studentRouter");
const db = require("./utils/db-connection");

require("./model");
app.use(express.json());
app.use("/student", studentRouter);
db.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
