const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const {validateToken}=require('../MiddleWares/ValidateToken')

// Create a new expense
router.post('/', validateToken,expenseController.createExpense);

// Get all expenses
router.get('/', expenseController.getExpenses);

// Get expense by ID
router.get('/:id', expenseController.getExpenseById);

// Update expense
router.put('/:id',expenseController.updateExpense);

// Delete expense
router.delete('/:id', validateToken,expenseController.deleteExpense);

module.exports = router;
