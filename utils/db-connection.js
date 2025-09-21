const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "lenovog5012345", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log(`connection has been established successfully.`);
  } catch (err) {
    console.log(err);
  }
})();
// const mySql = require("mysql2");

// const connection = mySql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "lenovog5012345",
//   database: "testdb",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log(err);

//     return;
//   }

//   console.log("connection  has beenn created.");
// });
// const connectionQuery = `create table IF NOT EXISTS  Users(
//   id int AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(20),
//   email VARCHAR(20));

//   `;
// connection.execute(connectionQuery, (err) => {
//   if (err) {
//     console.log(err);
//     connection.end();
//     return;
//   }
//   console.log("table has been created.");
// });

module.exports = sequelize;
