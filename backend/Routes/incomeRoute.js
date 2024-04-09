/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");

// Create a new income
router.post("/", incomeController.createIncome);

// Get all incomes
router.get("/", incomeController.getIncomes);

// Get income by ID
router.get("/:id", incomeController.getIncomeById);

// Get income by name
router.get("/name/:name", incomeController.getIncomeByName);

// Update income
router.put("/:id", incomeController.updateIncome);

// Delete income
router.delete("/:id", incomeController.deleteIncome);

module.exports = router;
