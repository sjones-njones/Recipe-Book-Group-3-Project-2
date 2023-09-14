const router = require('express').Router();
const { Recipe, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Find all users saved recipes
router.get('/recipebook', async (req, res) => {
    try {
        const userId = req.session.userId;
        const userRecipes = req.body;
        const allUserRecipes = await Recipe.findAll({
            where: {
                userId: userId,
            }, include:[
                {model: User}
            ]
        });
        if (!allUserRecipes) {
            res.status(404).json({ message: 'No recipes found' });
        } else {
            res.status(200).json(allUserRecipes);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
// Finds users saved recipe
router.get('/recipebook/:idMeal', async (req, res) => {
    try {
        const recipeId = req.params.idMeal;
        const findRecipe = await Recipe.findOne({
            where: {
                id_meal: recipeId

            }});
        console.log(findRecipe)
        if (!findRecipe) {
            res.status(404).json({ message: 'Cannot find recipe' });
        } else {
            res.status(200).json(findRecipe);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
// Saves users recipe from meal database to their recipe book
router.post('/recipebook', async (req, res) => {
    try {
        const saveRecipe = await Recipe.create({
            idMeal: req.body.idMeal,
            strMeal: req.body.strMeal,
            strMealThumb: req.body.strMealThumb,
            userId: req.session.userId,
        });
        res.status(200).json(saveRecipe);
    } catch (error) {
        res.status(500).json(error);
    }
});
// Deletes users saved recipe from their recipe book
router.delete('/recipebook/:idMeal', async (req, res) => {
    try {
        const deleteId = req.params.idMeal;
        const deleteRecipe = await Recipe.destroy({
            where: {
                idMeal: deleteId,
                userId: req.session.userId
            }
        });
        console.log(deleteRecipe)
        if (!deleteRecipe) {
            res.status(404).json({ message: 'Cannot find recipe' });
        } else {
            res.status(200).json(deleteRecipe);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
