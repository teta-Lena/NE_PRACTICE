const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");
const auth = require("../middleware/auth");

router.post("/create-employee", employeeController.createEmployee);

// Start the server

module.exports = router;
