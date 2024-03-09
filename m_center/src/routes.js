const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.post('/', Controller.register);

module.exports = router;