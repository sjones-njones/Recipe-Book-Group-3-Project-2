const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

// Finds users saved recipe(s)
router.get('/:id', async (req, res) => {
    try {
        const recipeId = req.params.id;
        const findRecipe = await Recipe.findOne({
            where: {
                id: recipeId,
            }
        });
        console.log(findRecipe)
        if(!findRecipe) {
            res.status(404).json({ message: 'Cannot find recipe' });
        } else {
            res.status(200).json(findRecipe);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
// Saves users recipe from meal database to their recipe book
router.post('/', async (req, res) => {
    try {
        const saveRecipe = await Recipe.create(req.body);
        res.status(200).json(saveRecipe);
    } catch (error) {
        res.status(500).json(error);
    }
});
// Deletes users saved recipe from their recipe book
router.delete('/:id', async (req, res) => {
    try {
        const deleteId = req.params.id;
        const deleteRecipe = await Recipe.destroy({
            where: {
                id: deleteId,
            }
        });
        if (!deleteRecipe) {
            res.status(404).json({ message: 'Cannot find recipe'});
        } else {
            res.status(200).json(deleteRecipe);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
