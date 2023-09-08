const { Recipe } = require('../models');

const recipeData = [
  {
    name: 'Turkey Tomato Cheese Pizza',
    description: '"Turkey Tomato Cheese Pizza might be just the Mediterranean recipe you are searching for. For $1.84 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today.',
    directions: 'instructions: "Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top. Add a little cheese, bell pepper, onion, turkey and create a layer.Top with another layer of cheese, turkey, tomato, bell pepper, onion.Add another layer of cheese, and then sprinkle with pepper.Place the pizza on a ceramic grill plate and place into the grill.Grill for 6-10 minutes, or until cooked as desired.Slice, and serve immediately.',
    keywords:'brunch, pizza, turkey',
  },
  {
    name: 'Cracker Snacks',
    description: 'Good afternoon snack',
    directions: 'Peel and slice ingredients. Measure out all the ingredients. Layer each ingredient on top of the cracker.',
    keywords:'snack, cracker',
  },
  {
    name: 'Meatballs on English Muffin',
    description: 'good afterschool snack',
    directions: 'Preheat oven to 425°F. Measure out all ingredients. Finely chop onion. Peel and mince garlic. Line baking tray with aluminum foil.',
    keywords:'after school snack',
  },
  {
    name: 'Sweet Potato Black Bean Empanadas',
    description: 'easy dinner',
    directions: 'Divide dough into 6 equal portions, shaping each into a ball. Roll each dough portion into a (5-inch) circle on lightly floured surface. Working with 1 portion at a time, spoon 3 T of filling into center of each circle. Moisten edges of dough with water; fold dough over filling. Press edges together to seal. Place empanadas on a large baking sheet coated with cooking spray. Cut 3 diagonal slits across top of each empanada and lightly spray with cooking spray.',
    keywords:'dinner sweet potatoes',
  },
];

const seedUser = () => Recipe.bulkCreate(recipeData);

module.exports = seedUser;
