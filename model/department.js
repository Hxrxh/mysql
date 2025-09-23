const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Department = sequelize.define(
  "Department",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = Department;
