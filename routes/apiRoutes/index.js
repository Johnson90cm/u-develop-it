const express = require('express')
const router = express.Router();

//is it candidateRoutes or candidatesRoutes?
router.use(require('./candidatesRoutes'))
router.use(require('./partyRoutes'));

module.exports = router;