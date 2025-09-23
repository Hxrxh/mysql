const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/add", userController.addStudent); // Add a student
router.get(
  "/department/:id/students",
  userController.getDepartmentWithStudents
); // Get department + students

module.exports = router;
