// links controller files needed
const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

// creates routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// makes routes available in other files 
module.exports = router;
