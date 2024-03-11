const express = require('express');
const router = express.Router();

const Controller = require('./controller');
const verify = require('./verify');

router.post('/',verify, Controller.register);
router.put('/:id',verify, Controller.update);
router.get('/search', Controller.search_by_name);

module.exports = router;