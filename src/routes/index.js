import express from "express";
import userRoutes from "./UserRoutes.js";
import accountRoutes from "./AccountRoutes.js";
import branchRoutes from "./BranchRoutes.js";
import employeeRoutes from "./EmployeeRoutes.js";
import loanRoutes from "./LoanRoutes.js";
import transactionRoutes from "./TransactionRoutes.js";
import cardRoutes from "./CardRoutes.js";

const router = express.Router();

router.use('/users', userRoutes);
router.use('/accounts', accountRoutes);
router.use('/branches', branchRoutes);
router.use('/employees', employeeRoutes);
router.use('/loans', loanRoutes);
router.use('/transactions', transactionRoutes);
router.use('/cards', cardRoutes);

export default router;