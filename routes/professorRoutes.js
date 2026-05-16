const express = require('express');
const router = express.Router();
const controller = require('../controllers/professorController');

router.post('/register', controller.register);
router.get('/', controller.getAll);

module.exports = router;
