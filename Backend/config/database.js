// db.js

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "teta2005",
  database: "restfulservices",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL:", error);
    return;
  }
  console.log("Connected to MySQL database");
});
const createAdminQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
  )
`;
// const createEmployeeWithDetails
connection.query(createAdminQuery, (error, results) => {
  if (error) {
    console.error("Error creating Admin table:", error);
    return;
  }
  ``;
  console.log("Admin table created successfully");
});

module.exports = connection;
