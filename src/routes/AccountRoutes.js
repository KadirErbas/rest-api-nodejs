import express from 'express';
import { getAccounts, getAccountById, createAccount, updateAccount, deleteAccount } from '../controllers/AccountController.js';

const router = express.Router();

router.get('/accounts', getAccounts);
router.get('/accounts/:id', getAccountById);
router.post('/accounts', createAccount);
router.put('/accounts/:id', updateAccount);
router.patch('/accounts/:id', updateAccount); // Kısmi güncelleme için aynı controller'ı kullanabilirsiniz
router.delete('/accounts/:id', deleteAccount);

export default router;