const { Router } = require('express');
const properties = require('./properties');
const agents = require('./agents');
const login = require('./login');

const router = Router();

router.use('/properties', properties);
router.use('/agents', agents);
router.use('/login', login);

module.exports = router;