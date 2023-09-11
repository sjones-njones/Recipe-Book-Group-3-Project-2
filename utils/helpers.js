module.exports = {
    combine_ingredients: (recipe) => {
        let i = 3;
        const stringI = i.toString()
        const ing = "strIngredient" + stringI
       return ing
        // let ingredientArray = [];
        // for (i = 1; i<=20; i++) {
        //     const ingredient = "strIngredient"+i.toString()
        //     const amount = "strMeasure"+i.toString()
        //     if (recipe.ingredient){
        //         ingredientArray.push( amount + " "+ ingredient )
        //     }
        // }
        // return ingredientArray[0]
    }
}