import express from 'express';
import Branch from '../models/Branch.js';

const router = express.Router();

// Get all branches
router.get('/branches', async (req, res) => {
    try {
        const branches = await Branch.findAll();
        res.json(branches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get branch by ID
router.get('/branches/:id', async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (branch) {
            res.json(branch);
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new branch
router.post('/branches', async (req, res) => {
    try {
        const branch = await Branch.create(req.body);
        res.status(201).json(branch);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update branch by ID
router.put('/branches/:id', async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (branch) {
            await branch.update(req.body);
            res.json(branch);
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Partial update branch by ID
router.patch('/branches/:id', async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (branch) {
            await branch.update(req.body);
            res.json(branch);
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete branch by ID
router.delete('/branches/:id', async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (branch) {
            await branch.destroy();
            res.json({ message: 'Branch deleted' });
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;