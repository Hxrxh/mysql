const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/add", userController.addUserData);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);
router.post("/addStudentWithId", userController.addStudentWithidentityCard);
module.exports = router;
