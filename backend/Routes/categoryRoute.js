const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/CategoryController.js');
const {validateToken} =require('../MiddleWares/ValidateToken')

// Create a new category
router.post('/', validateToken, categoryController.createCategory);

// Get all categories
router.get('/', validateToken, categoryController.getCategories);

// Get category by ID
router.get('/:id', validateToken, categoryController.getCategoryById);


// Update category
router.put('/:id', validateToken, categoryController.updateCategory);

// Delete category
router.delete('/:id', validateToken, categoryController.deleteCategory);

module.exports = router;
