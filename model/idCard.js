const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/db-connection");

const idCardTable = sequelize.define(
  "idCard",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    cardnumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = idCardTable;
