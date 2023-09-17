// makes models available to this file
const router = require('express').Router();
const { Recipe, User } = require('../models');

// gets only user's recipes
router.get('/', async (req, res) => {
  console.log('LOGGED IN');
  console.log(req.session.logged_In);
  try {
    if (req.session.logged_In) {
      const recipeData = await Recipe.findAll({
        where: {
          userId: req.session.userId,
        },
        include: [{ model: User }],
      });
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
      res.render('homepage', { recipes, logged_In: req.session.logged_In });
    } else {
      res.render('homepage', { homePage: true });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// Return all recipes in a given category
router.get('/search/:category', async (req, res) => {
  try {
    const requestCategoryURL = new URL(
      'https://www.themealdb.com/api/json/v1/1/filter.php'
    );
    requestCategoryURL.searchParams.append('c', req.params.category);
    fetch(requestCategoryURL).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data.meals);
          const recipes = data.meals;
          res.render('cardmaker', {
            recipes,
            logged_In: req.session.logged_In,
          });
        });
      }
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// returns one recipe when user clicks it
router.get('/recipe/:idMeal', async (req, res) => {
  let allSearched = [];
  try {
    if (req.session.userId) {
      allSearched = await Recipe.findAll({
        where: {
          userId: req.session.userId,
        },
        attributes: ['idMeal'],
        include: [{ model: User }],
      });
    }
    const allSearchedPlain = allSearched.map(
      (recipe) => recipe.get({ plain: true }).idMeal
    );
    const requestidMealURL = new URL(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.idMeal}`
    );
    fetch(requestidMealURL).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          const recipes = data.meals[0];
          const recipeDetails = {
            saved: allSearchedPlain.includes(parseInt(req.params.idMeal)),
            recipe: recipes,
          };
          res.render('mealDetails', {
            recipeDetails,
            logged_In: req.session.logged_In,
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// gets only user's recipes
router.get('/recipebook', async (req, res) => {
  try {
    if (req.session.logged_In) {
      const recipeData = await Recipe.findAll({
        where: {
          userId: req.session.userId,
        },
        include: [{ model: User }],
      });
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
      res.render('cardmaker', {
        recipes,
        logged_In: req.session.logged_In,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// render login page
router.get('/login', (req, res) => {
  if (req.session.logged_In) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// makes router available in other files
module.exports = router;
