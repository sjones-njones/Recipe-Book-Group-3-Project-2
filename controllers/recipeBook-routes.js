const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils');

// gets only users recipes
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
            res.render('userResults', { recipe, logged_in: req.session.logged_in });
          });  
        }
      })
    }
  } catch (err) {
    console.log(err); 
    res.status(500).json(err)
  };
})

module.exports = router;