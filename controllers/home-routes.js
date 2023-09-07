const router = require("express").Router();
// const { Recipe, Ingredient, User } = require("../models");
const withAuth = require("../utils/Auth");

// GET recipes for by category
router.get("/search", async (req, res) => {
  res.render("search");
});

module.exports = router;
