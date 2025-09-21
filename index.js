const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const db = require("./utils/db-connection");
const studentModel = require("./model/students");
app.use(express.json());
app.use("/users", userRouter);
db.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
