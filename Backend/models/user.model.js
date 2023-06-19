// userSchema.js

const connection = require("../config/database"); // Path to your db.js file

exports.createUser = (user) => {
  return new Promise((resolve, reject) => {
    const insertUserQuery = "INSERT INTO users (email, password) VALUES (?, ?)";
    connection.query(
      insertUserQuery,
      [user.email, user.password],
      (error, results) => {
        if (error) {
          console.error("Error creating user:", error);
          return reject(error);
        }
        return resolve(results.insertId);
      }
    );
  });
};

exports.findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const selectUserQuery = "SELECT * FROM users WHERE email = ?";
    connection.query(selectUserQuery, [email], (error, results) => {
      if (error) {
        console.error("Error fetching user:", error);
        return reject(error);
      }
      return resolve(results[0]);
    });
  });
};
