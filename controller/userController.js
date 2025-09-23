const db = require("../utils/db-connection");
const Students = require("../model/students");
const idCardTable = require("../model/idCard");
const addUserData = (req, res) => {
  // const { name, email } = req.body;
  // const addQuery = "Insert INTO Users(name,email) Values(?,?)";
  // db.execute(addQuery, [name, email], (err) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send(err.message);
  //     // db.end();
  //     return;
  //   }
  //   console.log("Successfully added");
  //   res.status(201).send(`User ${name} successfully added.`);
  // });
};
const deleteUser = (req, res) => {
  // const { id } = req.params;
  // const deleteQuery = "Delete from Users where id = ?";
  // db.execute(deleteQuery, [id], (err, results) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send(err.message);
  //     // db.end();
  //     return;
  //   }
  //   if (results.affectedRows === 0) {
  //     res.status(404).send("User not found.");
  //     return;
  //   }
  //   console.log("Successfully deleted");
  //   res.status(200).send(`User  successfully deleted.`);
  // });
};
const updateUser = (req, res) => {
  // const { id } = req.params;
  // const { name, email } = req.body;
  // const updateQuery = "Update  Users Set name = ?, email = ?  where id = ?";
  // db.execute(updateQuery, [name, email, id], (err, results) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send(err.message);
  //     // db.end();
  //     return;
  //   }
  //   if (results.affectedRows === 0) {
  //     res.status(404).send("User not found.");
  //   }
  //   console.log("Successfully updated");
  //   res.status(200).send(`User ${name} successfully updated.`);
  // });
};
const addStudentWithidentityCard = async (req, res) => {
  try {
    console.log("identitystudent called");
    const student = await Students.create(req.body.student);
    const idCard = await idCardTable.create({
      ...req.body.identity,
      studentId: student.id,
    });
    res.status(201).json({ student, idCard });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};
module.exports = {
  addUserData,
  updateUser,
  deleteUser,
  addStudentWithidentityCard,
};
