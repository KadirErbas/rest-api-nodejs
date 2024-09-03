import Branch from '../models/Branch.js';

// Get all branches
export const getBranches = async (req, res) => {
    try {
        const branches = await Branch.findAll();
        res.json(branches);
    } catch (error) {
        console.error('Error fetching branches:', error.message); // Hata mesajını günlüğe kaydet
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Get branch by ID
export const getBranchById = async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (branch) {
            res.json(branch);
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Create new branch
export const createBranch = async (req, res) => {
    try {
        const branch = await Branch.create(req.body);
        res.status(201).json(branch);
    } catch (error) {
        console.error('Error creating branch:', error.message);
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

// Update branch by ID
export const updateBranch = async (req, res) => {
    try {
        const [updated] = await Branch.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedBranch = await Branch.findByPk(req.params.id);
            res.json(updatedBranch);
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (error) {
        console.error('Error updating branch:', error.message);
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

// Partial update branch by ID
export const patchBranch = async (req, res) => {
    try {
        const [updated] = await Branch.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedBranch = await Branch.findByPk(req.params.id);
            res.json(updatedBranch);
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (error) {
        console.error('Error partially updating branch:', error.message);
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

// Delete branch by ID
export const deleteBranch = async (req, res) => {
    try {
        const deleted = await Branch.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json({ message: 'Branch deleted' });
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (error) {
        console.error('Error deleting branch:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};