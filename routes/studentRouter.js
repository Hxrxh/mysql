const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/add", studentController.addStudent); // Add a student
router.get(
  "/department/:id/students",
  studentController.getDepartmentWithStudents
); // Get department + students

module.exports = router;
