const { Sequelize, DataTypes } = require("sequelize");

const config = require("../config/dbconfig");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const Employee = sequelize.define("Employee", {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationalId: {
    type: DataTypes.STRING(16),
    allowNull: false,
    unique: true,
    validate: {
      len: {
        args: [16, 16],
        msg: "National ID must be 16 characters long",
      },
    },
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  laptopManufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  laptopModel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  laptopSerialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Create the table if it doesn't exist
Employee.sync();

module.exports = Employee;
