const router = require("express").Router();
const { Recipe, User } = require("../models");
const withAuth = require("../utils/auth");

// GET recipes for by category
router.get("/search", async (req, res) => {
  res.render("search");
});

// gets only user's recipes
router.get('/', async (req, res) => {
  try {
    if (req.session.logged_In) {
    const recipeData = await Recipe.findAll({
      where: {
        userId: req.session.userId
      },
      include: [{ model: User }]
    });
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('homepage', { recipes, logged_in: req.session.logged_in });
  }
  }
  catch (err) {
    res.status(500).json(err)
  };
});

router.get("/search/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const requestCategoryURL = new URL(
      "http://www.themealdb.com/api/json/v1/1/filter.php"
    );
    requestCategoryURL.searchParams.append("c", req.params.category);
    fetch(requestCategoryURL).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data.meals);
          let recipes = data.meals;
          res.render("searchResults", { recipes });
        });
      }
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/recipe/:idMeal", async (req, res) => {
  try {
    const allSearched = await Recipe.findAll({
      where: {
        userId: req.session.userId
      },
      include: [{ model: User }],
    });
    const requestidMealURL = new URL(
      `www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.idMeal}`
    );
    fetch(requestidMealURL).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          let recipes = data.meals;
          recipeDetails = {
            saved: allSearched.includes(req.params.idMeal),
            recipe: recipes,
            logged_in: req.session.logged_in
          }
          res.render("mealDetails", { recipeDetails });
        });
      }
    });
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// gets only user's recipes
router.get('/recipebook', async (req, res) => {
  try {
    if (req.session.logged_In) {
    const recipeData = await Recipe.findAll({
      where: {
        userId: req.session.userId
      },
      include: [{ model: User }]
    });
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('recipebook', { recipes, logged_in: req.session.logged_in });
  }
  }
  catch (err) {
    res.status(500).json(err)
  };
});

// render login page
router.get('/login', (req, res) => {
  if (req.session.logged_In) {
    res.redirect('/search');
    return;
  }
  res.render('login');
});

module.exports = router;

