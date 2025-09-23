const student = require("../model/students");
const idCard = require("../model/idCard");

student.hasOne(idCard);
idCard.belongsTo(student);

module.exports = {
  student,
  idCard,
};
