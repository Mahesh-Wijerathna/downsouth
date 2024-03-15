const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.post('/', Controller.register);
router.put('/', Controller.update);
router.delete('/', Controller.delete);

module.exports = router;