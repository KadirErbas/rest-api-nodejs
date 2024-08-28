import express from 'express';
import Employee from '../models/Employee.js';

const router = express.Router();

// Get all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get employee by ID
router.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new employee
router.post('/employees', async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update employee by ID
router.put('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (employee) {
            await employee.update(req.body);
            res.json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Partial update employee by ID
router.patch('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (employee) {
            await employee.update(req.body);
            res.json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete employee by ID
router.delete('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (employee) {
            await employee.destroy();
            res.json({ message: 'Employee deleted' });
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;