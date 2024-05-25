const { Router } = require('express');
const properties = require('./properties');
const agents = require('./agents');

const router = Router();

router.use('/properties', properties);
router.use('/agents', agents);

module.exports = router;