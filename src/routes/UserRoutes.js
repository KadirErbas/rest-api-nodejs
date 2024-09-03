import express from 'express';
import { getUsers, getUserById, createUser, updateUser, partialUpdateUser, deleteUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.patch('/:id', partialUpdateUser);
router.delete('/:id', deleteUser);

export default router;