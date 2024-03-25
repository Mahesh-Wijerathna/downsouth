const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.post('/', Controller.register);
router.put('/', Controller.update);
router.delete('/', Controller.delete);
router.get('/', Controller.getAll);
router.get('/:appointment_id', Controller.getOne);


module.exports = router;