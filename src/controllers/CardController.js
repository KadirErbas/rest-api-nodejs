import Card from '../models/Card.js';

// Get all cards
export const getCards = async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.json(cards);
    } catch (error) {
        console.error('Error fetching cards:', error.message); // Hata mesajını günlüğe kaydet
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Get card by ID
export const getCardById = async (req, res) => {
    try {
        const card = await Card.findByPk(req.params.id);
        if (card) {
            res.json(card);
        } else {
            res.status(404).json({ message: 'Card not found' });
        }
    } catch (error) {
        console.error('Error fetching card by ID:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Create new card
export const createCard = async (req, res) => {
    try {
        const card = await Card.create(req.body);
        res.status(201).json(card);
    } catch (error) {
        console.error('Error creating card:', error.message);
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

// Update card by ID
export const updateCard = async (req, res) => {
    try {
        const [updated] = await Card.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedCard = await Card.findByPk(req.params.id);
            res.json(updatedCard);
        } else {
            res.status(404).json({ message: 'Card not found' });
        }
    } catch (error) {
        console.error('Error updating card:', error.message);
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

// Partial update card by ID
export const patchCard = async (req, res) => {
    try {
        const [updated] = await Card.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedCard = await Card.findByPk(req.params.id);
            res.json(updatedCard);
        } else {
            res.status(404).json({ message: 'Card not found' });
        }
    } catch (error) {
        console.error('Error partially updating card:', error.message);
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

// Delete card by ID
export const deleteCard = async (req, res) => {
    try {
        const deleted = await Card.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json({ message: 'Card deleted' });
        } else {
            res.status(404).json({ message: 'Card not found' });
        }
    } catch (error) {
        console.error('Error deleting card:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};