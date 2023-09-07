const router = require('express').Router();
const { Recipe, Ingredient, User } = require('../models');
const withAuth = require('../utils/Auth');

// GET recipes for by category
router.get('/', async (req, res) => {
      res.render('homepage', {search});
  });


module.exports = router;
