// routes/employeeRoutes.js
const express = require('express');
const { createEmployee, getEmployees, updateEmployee, deleteEmployee } = require('../controllers/EmployeeController');
const multer = require('multer');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Multer setup for image upload
const upload = multer({ dest: 'uploads/' });

// GET /api/employees
router.get('/',  getEmployees);

// POST /api/employees
router.post('/', upload.single('image'), createEmployee);

// PUT /api/employees/:id
router.put('/:id',  updateEmployee);

// DELETE /api/employees/:id
router.delete('/:id', deleteEmployee);

module.exports = router;
