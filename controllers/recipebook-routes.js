const router = require("express").Router();
const { User, Recipe } = require('../models');
const withAuth = require("../utils/auth");

router.get('/recipebook', async (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect('/login');
	} else {
		try {
			const savedRecipe = req.session.savedRecipe || [];
			if (savedRecipe) {
				for (let i = 0; i < savedRecipe.length; i++) {
					const recipe = savedRecipe[i];
					console.log(`Recipe ${i + 1}: ${recipe.name}, Description: ${recipe.description}, Directions: ${recipe.directions}`)
				}
			}
			const recipebookData = await Recipe.findAll(savedRecipe, {
				attributes: [
					'idMeal',
					'name',
					'description',
					['directions', 'instructions'],
					'keywords',
				]
			});
			if (!recipebookData) {
				res.status(404).send('No recipes found in recipebook');
			} else {
				console.log('recipebook');
				res.render('recipebook', {
					savedRecipe,
					recipebookData,
					error: null,
				});
			}
		} catch (error) {
			res.render('recipebook', {
				savedRecipe: [],
				recipebookData: [],
				error: 'Server Error'
			})
			// res.send({ message: 'Server error' });
		}
	}
});
// Route to render a single recipe from recipebook
router.get('/recipebook/:id', async (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect('/login');
	} else {
		try {
			const recipeId = req.params.id;
			const savedRecipe = await Recipe.findByPk(recipeId, {
				attributes: [
					'idMeal',
					'name',
					'description',
					['directions', 'instructions'],
					'keywords',
				]
			});
			if (!savedRecipe) {
				res.status(404).send('Sorry, cannot find recipe');
			} else {
				console.log('recipebook/:id')
				res.render('recipebook/:id', {
					savedRecipe,
					error: null,
				});
			}
		} catch (error) {
			res.status(500).send('Server Error, please try again later');
		}
	}
});

// Route to delete a recipe from recipebook


module.exports = router;