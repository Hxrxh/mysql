const Student = require("../model/students");
const Department = require("../model/department");

// One Department has many Students
Department.hasMany(Student, {
  foreignKey: "departmentId",
  onDelete: "CASCADE",
});

// Each Student belongs to one Department
Student.belongsTo(Department, { foreignKey: "departmentId" });

module.exports = { Student, Department };
