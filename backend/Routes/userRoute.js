const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

router.post('/', userController.register);

router.get('/', userController.readall);

router.get('/:id', userController.readbyid);

router.get('/name/:username', userController.readbyname);

router.put('/:id', userController.updatebyid);

router.delete('/:id', userController.deletebyid);

module.exports = router;
