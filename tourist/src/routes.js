const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.post('/', Controller.register);
router.post('/search', Controller.search); 

module.exports = router;