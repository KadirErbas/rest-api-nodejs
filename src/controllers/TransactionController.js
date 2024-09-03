import Transaction from '../models/Transaction.js';

export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            res.json(transaction);
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

export const updateTransaction = async (req, res) => {
    try {
        const [updated] = await Transaction.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedTransaction = await Transaction.findByPk(req.params.id);
            res.json(updatedTransaction);
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

export const deleteTransaction = async (req, res) => {
    try {
        const deleted = await Transaction.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json({ message: 'Transaction deleted' });
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};