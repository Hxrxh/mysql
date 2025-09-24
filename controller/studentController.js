const { Student } = require("../model");

// Create a student with a department
const addStudent = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if department exists

    const student = await Student.create({ name, email });
    res.status(201).json({ student });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Get a department with all its students
const getDepartmentWithStudents = async (req, res) => {
  // try {
  //   const department = await Department.findByPk(req.params.id, {
  //     include: Student,
  //   });
  //   if (!department)
  //     return res.status(404).json({ error: "Department not found" });
  //   res.status(200).json({ department });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json({ error: err.message });
  // }
};

module.exports = { addStudent, getDepartmentWithStudents };
