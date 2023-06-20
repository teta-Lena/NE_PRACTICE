const Employee = require("../models/employee.model");

exports.createEmployee = async (req, res) => {
  try {
    const { body } = req;

    // Create a new Employee instance with the request body
    const employee = {
      firstname: body.firstname,
      lastname: body.lastname,
      nationalId: body.nationalId,
      telephone: body.telephone,
      email: body.email,
      department: body.department,
      position: body.position,
      laptopManufacturer: body.laptopManufacturer,
      laptopModel: body.laptopModel,
      laptopSerialNumber: body.laptopSerialNumber,
    };

    // Save the employee to the database
    const createdEmployee = await Employee.create(employee);

    res.status(201).json({ success: true, employeeId: createdEmployee.id });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
