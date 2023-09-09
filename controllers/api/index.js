const router = require('express').Router();

const userRoutes = require('./user-routes');
const reciperoutes = require('./recipe-routes');

router.use('/users', userRoutes);
router.use('/recipes', reciperoutes);

module.exports = router;
