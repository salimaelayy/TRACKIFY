/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");
const {validateToken} =require('../MiddleWares/ValidateToken')

// Create a new income
router.post("/",validateToken, incomeController.createIncome);

// Get all incomes
router.get("/", validateToken, incomeController.getIncomes);

// Get income by ID
router.get("/:id", validateToken, incomeController.getIncomeById);

// Get income by name
router.get("/name/:name", validateToken, incomeController.getIncomeByName);

// Update income
router.put("/:id", validateToken, incomeController.updateIncome);

// Delete income
router.delete("/:id", validateToken, incomeController.deleteIncome);

module.exports = router;
