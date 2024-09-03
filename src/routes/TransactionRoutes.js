import express from 'express';
import { getTransactions, getTransactionById, createTransaction, updateTransaction, deleteTransaction } from '../controllers/TransactionController.js';

const router = express.Router();

router.get('/', getTransactions);
router.get('/:id', getTransactionById);
router.post('/', createTransaction);
router.put('/:id', updateTransaction);
router.patch('/:id', updateTransaction); // Kısmi güncelleme için aynı controller'ı kullanabilirsiniz
router.delete('/:id', deleteTransaction);

export default router;