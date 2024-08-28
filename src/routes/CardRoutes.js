import express from 'express';
import Card from '../models/Card.js';

const router = express.Router();

// Get all cards
router.get('/cards', async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get card by ID
router.get('/cards/:id', async (req, res) => {
    try {
        const card = await Card.findByPk(req.params.id);
        if (card) {
            res.json(card);
        } else {
            res.status(404).json({ message: 'Card not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new card
router.post('/cards', async (req, res) => {
    try {
        const card = await Card.create(req.body);
        res.status(201).json(card);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update card by ID
router.put('/cards/:id', async (req, res) => {
    try {
        const card = await Card.findByPk(req.params.id);
        if (card) {
            await card.update(req.body);
            res.json(card);
        } else {
            res.status(404).json({ message: 'Card not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Partial update card by ID
router.patch('/cards/:id', async (req, res) => {
    try {
        const card = await Card.findByPk(req.params.id);
        if (card) {
            await card.update(req.body);
            res.json(card);
        } else {
            res.status(404).json({ message: 'Card not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete card by ID
router.delete('/cards/:id', async (req, res) => {
    try {
        const card = await Card.findByPk(req.params.id);
        if (card) {
            await card.destroy();
            res.json({ message: 'Card deleted' });
        } else {
            res.status(404).json({ message: 'Card not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;