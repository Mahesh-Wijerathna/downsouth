const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.post('/', Controller.register);
router.post('/update', Controller.update);
router.post('/delete', Controller.delete);
router.post('/login', Controller.login);


module.exports = router;