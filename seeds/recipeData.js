const { Recipe } = require('../models');

// seed data for recipe model
const recipeData = [
  {
    idMeal: 34245,
    strMeal: 'Turkey Tomato Cheese Pizza',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/41cxjh1683207682.jpg',
    userId: 1,
  },
  {
    idMeal: 33245,
    strMeal: 'Cracker Snacks',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/y7h0lq1683208991.jpg',
    userId: 2,
  },
  {
    idMeal: 33275,
    strMeal: 'Meatballs on English Muffin',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/va668f1683209318.jpg',
    userId: 2,
  },
  {
    idMeal: 45335,
    strMeal: 'Sweet Potato Black Bean Empanadas',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
    userId: 3,
  },
];

// seeds the data in the recipe model
const seedUser = () => Recipe.bulkCreate(recipeData);

// allows seedUser to be available elsewhere
module.exports = seedUser;
