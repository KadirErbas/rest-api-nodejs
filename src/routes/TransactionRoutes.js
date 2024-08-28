import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

// Get all transactions
router.get('/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get transaction by ID
router.get('/transactions/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            res.json(transaction);
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new transaction
router.post('/transactions', async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update transaction by ID
router.put('/transactions/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            await transaction.update(req.body);
            res.json(transaction);
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Partial update transaction by ID
router.patch('/transactions/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            await transaction.update(req.body);
            res.json(transaction);
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete transaction by ID
router.delete('/transactions/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            await transaction.destroy();
            res.json({ message: 'Transaction deleted' });
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;