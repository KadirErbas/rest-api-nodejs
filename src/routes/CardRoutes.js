import express from 'express';
import {
    getCards,
    getCardById,
    createCard,
    updateCard,
    patchCard,
    deleteCard
} from '../controllers/CardController.js';

const router = express.Router();

router.get('/', getCards);
router.get('/:id', getCardById);
router.post('/', createCard);
router.put('/:id', updateCard);
router.patch('/:id', patchCard);
router.delete('/:id', deleteCard);

export default router;