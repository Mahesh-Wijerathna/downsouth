const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.post('/', Controller.register);
router.get('/search_by_destination', Controller.search_by_destination);

module.exports = router;