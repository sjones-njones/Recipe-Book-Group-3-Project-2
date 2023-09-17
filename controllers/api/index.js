const router = require('express').Router();

// connects the controller files
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');

// sets up api routes
router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);

// makes route available in other files
module.exports = router;
