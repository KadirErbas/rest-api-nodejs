import express from 'express';
import {
    getBranches,
    getBranchById,
    createBranch,
    updateBranch,
    patchBranch,
    deleteBranch
} from '../controllers/BranchController.js';

const router = express.Router();

router.get('/', getBranches);
router.get('/:id', getBranchById);
router.post('/', createBranch);
router.put('/:id', updateBranch);
router.patch('/:id', patchBranch);
router.delete('/:id', deleteBranch);

export default router;