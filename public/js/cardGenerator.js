function cardGenerator(recipes){
    const card = $('<div>').addClass('col-md-4');

    // Create the card element
    const cardInner = $('<div>').addClass('card');
    const cardImage = $('<img>').addClass('card-img-top').attr('src', recipe.strMealThumb).attr('alt', recipe.strMeal);
    const cardBody = $('<div>').addClass('card-body');
    const cardTitle = $('<h5>').addClass('card-title text-center').text(recipe.strMeal);
    const cardText = $('<p>').addClass('card-text').text('ID: ' + recipe.idMeal);

    // Construct the card structure
    cardBody.append(cardTitle, cardText);
    cardInner.append(cardImage, cardBody);
    card.append(cardInner);

    // Append the card to the container
    $recipeCardsContainer.append(card);
}

module.exports = {cardGenerator};