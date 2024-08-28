import Account from '../models/Account.js';

export const getAccounts = async (req, res) => {
    try {
        const accounts = await Account.findAll();
        res.json(accounts);
    } catch (error) {
        console.error('Error fetching accounts:', error.message);  // Hata mesajını günlüğe kaydet
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


export const getAccountById = async (req, res) => {
    try {
        const account = await Account.findByPk(req.params.id);
        if (account) {
            res.json(account);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createAccount = async (req, res) => {
    try {
        const account = await Account.create(req.body);
        res.status(201).json(account);
    } catch (error) {
        res.status(400).json({ message: 'Bad request' });
    }
};

export const updateAccount = async (req, res) => {
    try {
        const [updated] = await Account.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAccount = await Account.findByPk(req.params.id);
            res.json(updatedAccount);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Bad request' });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        const deleted = await Account.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json({ message: 'Account deleted' });
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};