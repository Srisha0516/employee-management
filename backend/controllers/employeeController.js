const prisma = require("../config/db");

exports.getEmployees = async (req, res) => {
  const employees = await prisma.employee.findMany();
  res.json(employees);
};

exports.createEmployee = async (req, res) => {
  const { name, position, salary } = req.body;

  const emp = await prisma.employee.create({
    data: {
      name,
      position,
      salary: parseFloat(salary)
    }
  });

  res.json(emp);
};