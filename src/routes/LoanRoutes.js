import express from 'express';
import Loan from '../models/Loan.js';

const router = express.Router();

// Get all loans
router.get('/loans', async (req, res) => {
    try {
        const loans = await Loan.findAll();
        res.json(loans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get loan by ID
router.get('/loans/:id', async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan) {
            res.json(loan);
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new loan
router.post('/loans', async (req, res) => {
    try {
        const loan = await Loan.create(req.body);
        res.status(201).json(loan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update loan by ID
router.put('/loans/:id', async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan) {
            await loan.update(req.body);
            res.json(loan);
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Partial update loan by ID
router.patch('/loans/:id', async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan) {
            await loan.update(req.body);
            res.json(loan);
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete loan by ID
router.delete('/loans/:id', async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan) {
            await loan.destroy();
            res.json({ message: 'Loan deleted' });
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;