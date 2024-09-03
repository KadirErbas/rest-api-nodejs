import express from 'express';
import {
    getLoans,
    getLoanById,
    createLoan,
    updateLoan,
    deleteLoan
} from '../controllers/LoanController.js';

const router = express.Router();

// Get all loans
router.get('/', getLoans);

// Get loan by ID
router.get('/:id', getLoanById);

// Create new loan
router.post('/', createLoan);

// Update loan by ID
router.put('/:id', updateLoan);

// Partial update loan by ID
router.patch('/:id', updateLoan); // Using the same controller for partial updates

// Delete loan by ID
router.delete('/:id', deleteLoan);

export default router;