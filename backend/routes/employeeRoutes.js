const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  getEmployees,
  createEmployee
} = require("../controllers/employeeController");

router.get("/", auth, getEmployees);
router.post("/", auth, createEmployee);

module.exports = router;