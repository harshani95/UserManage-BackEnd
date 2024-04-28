const express = require('express');
const router = express.Router();

const userController = require('../controller/UserController');

router.post('/create', userController.create);
router.get('/all', userController.findAll);

module.exports=router;