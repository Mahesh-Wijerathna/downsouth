const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.post('/', Controller.register);
router.get('/search', Controller.search_by_name);

module.exports = router;