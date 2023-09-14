module.exports = {
  // Combine ingredient amount and names into a string, return as array
  combine_ingredients: (recipe) => {
    const ingredientArray = [];
    for (i = 1; i <= 20; i++) {
      const ingredient = `strIngredient${i.toString()}`;

      const amount = `strMeasure${i.toString()}`;
      if (recipe[ingredient]) {
        ingredientArray.push(`${recipe[amount]} ${recipe[ingredient]}`);
      }
    }
    console.log(ingredientArray);

    return ingredientArray;
  },
  // Break the instructions up into separate lines on the return characters, return as array
  break_instructions: (recipe) => {
    const instString = recipe.strInstructions;
    console.log(instString);
    const splitInst = instString.split('\r\n');
    console.log(splitInst);
    return splitInst;
  },
};
