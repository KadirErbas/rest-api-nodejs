import express from 'express';
import { getAccounts, getAccountById, createAccount, updateAccount, deleteAccount } from '../controllers/AccountController.js';

const router = express.Router();

router.get('/', getAccounts);
router.get('/:id', getAccountById);
router.post('/', createAccount);
router.put('/:id', updateAccount);
router.patch('/:id', updateAccount); 
router.delete('/:id', deleteAccount);

export default router;