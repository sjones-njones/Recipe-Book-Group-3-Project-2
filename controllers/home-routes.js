const router = require("express").Router();
// const { Recipe, Ingredient, User } = require("../models");
const withAuth = require("../utils/Auth");

// GET recipes for by category
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

module.exports = router;
