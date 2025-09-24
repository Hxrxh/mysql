const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");

router.post("/", courseController.addCourse);
router.get("/addStudentCourses", courseController.addStudentToCourse);
module.exports = router;
