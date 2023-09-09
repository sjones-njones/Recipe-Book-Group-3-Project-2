const router = require("express").Router();
// const { Recipe, Ingredient, User } = require("../models");
const withAuth = require("../utils/Auth");


router.get("/search", async (req, res) => {
  res.render("search");
});

router.get("/search/:category", async (req, res) => {
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
});

// render login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/search');
    return;
  }
  res.render('login');
});

router.get("/search/:idMeal", async (req, res) => {
  const idMeal = req.params.idMeal;
  const requestidMealURL = new URL(
    `www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  fetch(requestidMealURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        let recipes = data.meals;
        res.render("singleResult", { recipes });
      });
    }
  });
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
