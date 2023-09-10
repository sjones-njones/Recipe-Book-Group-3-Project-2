const router = require("express").Router();
const { Recipe, User } = require("../models");
const withAuth = require("../utils/auth");

// gets only user's recipes
router.get('/', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        userId: req.session.userId
      },
      include: [{ model: User }]
    });
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    const idMealOnly = recipes.idMeal;

    for (let i = 0; i, idMealOnly.length; i++) {
      idMeal = idMealOnly[i];
      const requestidMealURL = `www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      fetch(requestidMealURL).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log(data.meals);
            let recipe = data.meals;
            res.render('homepage', { recipe, logged_in: req.session.logged_in });
          });
        }
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  };
})

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
    const dbrecipe = await Recipe.findOne({
      where: { id: req.params.idMeal },
      include: [{ model: User }],
    });
    const idMeal = req.params.idMeal;
    const requestidMealURL = new URL(
      `www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      fetch(requestidMealURL).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            let recipes = data.meals;
if (req.session.logged_in) {
  const alreadySaved = idMealOnly.includes(req.body.idMeal);
}
recipeDetails = {
  saved: alreadySaved,
  recipe: recipes,
  logged_in: req.session.logged_in 
}
        res.render("recipeDetail", { recipeDetails });
      });
    }
  });
}
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
