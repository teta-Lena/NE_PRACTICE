const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const employeeRoutes = require("./employee.route");
router.use("/users", userRoutes);
router.use("/employee", employeeRoutes);
module.exports = router;
