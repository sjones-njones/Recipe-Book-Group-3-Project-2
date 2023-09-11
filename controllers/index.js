const router = require('express').Router();

const recipebookRoutes = require('./recipebook-routes');
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

router.use('/recipebook', recipebookRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// comment
module.exports = router;
