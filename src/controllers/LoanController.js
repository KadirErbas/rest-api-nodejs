import Loan from '../models/Loan.js';

export const getLoans = async (req, res) => {
    try {
        const loans = await Loan.findAll();
        res.json(loans);
    } catch (error) {
        console.error('Error fetching loans:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan) {
            res.json(loan);
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const createLoan = async (req, res) => {
    try {
        const loan = await Loan.create(req.body);
        res.status(201).json(loan);
    } catch (error) {
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

export const updateLoan = async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan) {
            await loan.update(req.body);
            res.json(loan);
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

export const deleteLoan = async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan) {
            await loan.destroy();
            res.json({ message: 'Loan deleted' });
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};