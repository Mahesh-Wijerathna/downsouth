const express = require('express');
const router = express.Router();

const Controller = require('./controller');


router.post('/', Controller.register);
router.get('/search_by_destination', Controller.search_by_destination);
router.get('/search_by_radius , Controller.search_by_radius');


module.exports = router;