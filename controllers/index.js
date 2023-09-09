const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');

const recipeBookRoutes = require('./recipeBook-routes.js');

router.use('/', homeRoutes);

router.use('/recipebook', recipeBookRoutes);

router.use('/api', apiRoutes);


module.exports = router;
