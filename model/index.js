const Student = require("../model/students");
const Department = require("../model/department");
const Courses = require("../model/courses");
const studentCourses = require("./stuentCourses");
// One Department has many Students
// Department.hasMany(Student, {
//   foreignKey: "departmentId",
//   onDelete: "CASCADE",
// });
//Many to many  association
Student.belongsToMany(Courses, { through: studentCourses });
Courses.belongsToMany(Student, { through: studentCourses });
// Each Student belongs to one Department
// Student.belongsTo(Department, { foreignKey: "departmentId" });

module.exports = { Student, Department, Courses };
