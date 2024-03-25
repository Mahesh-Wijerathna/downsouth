const express = require('express');
const router = express.Router();

const Controller = require('./controller');
const verify = require('./verify');
const image_handler = require('./multer');


router.post('/',image_handler, Controller.register);
router.put('/',image_handler, Controller.update);
router.get('/search', Controller.search_by_name);
router.get('/', Controller.get_all);

module.exports = router;