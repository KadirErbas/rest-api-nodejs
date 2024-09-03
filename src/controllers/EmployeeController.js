import Employee from '../models/Employee.js';

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (error) {
        console.error('Error fetching employees:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        console.error('Error fetching employee:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        console.error('Error creating employee:', error.message);
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const [updated] = await Employee.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedEmployee = await Employee.findByPk(req.params.id);
            res.json(updatedEmployee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        console.error('Error updating employee:', error.message);
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const deleted = await Employee.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: 'Employee deleted' });
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        console.error('Error deleting employee:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};