module.exports = {
    // Combine ingredient amount and names into a string, return as array
    combine_ingredients: (recipe) => {
       
        let ingredientArray = [];
        for (i = 1; i<=20; i++) {
            const ingredient = "strIngredient"+i.toString()
            
            const amount = "strMeasure"+i.toString()
            if (recipe[ingredient]){
                ingredientArray.push( (recipe[amount] + " "+ recipe[ingredient]).toLowerCase())
            }
        };
        
        return ingredientArray
    },

  // Break the instructions up into separate lines on the return characters, return as array
  break_instructions: (recipe) => {
    const instString = recipe.strInstructions;
    const splitInst = instString.split('\r\n');
    return splitInst;
  },
};
