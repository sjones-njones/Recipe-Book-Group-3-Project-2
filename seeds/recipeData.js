const { Recipe } = require('../models');

const recipeData = [
  {
    idMeal: 34245,
    name: 'Turkey Tomato Cheese Pizza',
    description: '"Turkey Tomato Cheese Pizza might be just the Mediterranean recipe you are searching for. For $1.84 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today.',
    keywords: 'brunch, pizza, turkey',
    userId: 1
  },
  {
    idMeal: 33245,
    name: 'Cracker Snacks',
    description: 'Good afternoon snack',
    keywords: 'snack, cracker',
    userId: 2
  },
  {
    idMeal: 33275,
    name: 'Meatballs on English Muffin',
    description: 'good afterschool snack',
    directions: 'Preheat oven to 425°F. Measure out all ingredients. Finely chop onion. Peel and mince garlic. Line baking tray with aluminum foil.',
    keywords: 'after school snack',
    userId: 2
  },
  {
    idMeal: 45335,
    name: 'Sweet Potato Black Bean Empanadas',
    description: 'easy dinner',
    keywords: 'dinner sweet potatoes',
    userId: 3
  },
];

const seedUser = () => Recipe.bulkCreate(recipeData);

module.exports = seedUser;

