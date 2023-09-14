const fetchUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const addedRecipeIds = [];

// Function to fetch and add a random recipe card
const fetchAndAddRecipeCard = () => {
  fetch(fetchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Handle the JSON data
      console.log(data);

      const recipeId = data.meals[0].idMeal;

      // Check if the recipe ID is already added
      if (!addedRecipeIds.includes(recipeId)) {
        const apiResponse = {

          idMeal: data.meals[0].idMeal,
          imgSrc: data.meals[0].strMealThumb,
          cardText: data.meals[0].strMeal
        };

        const card = createCard(apiResponse);
        const cardContainer = $(".row");
        cardContainer.append(card);

        // Add the recipe ID to the array
        addedRecipeIds.push(recipeId);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

// Fetch and add 8 random recipe cards
for (let i = 0; i < 8; i++) {
  fetchAndAddRecipeCard();
}

function createCard(data) {
  const card = $("<div>").addClass("col-md-3 mb-4");
  const cardComponent = $("<div>").addClass("card");
  const cardLink = $("<a>")
    .attr("href", `/recipe/${data.idMeal}`)
  const cardImage = $("<img>")
    .addClass("card-img-top")
    .attr("src", data.imgSrc)
    .attr("alt", "Card Image");
  const cardBody = $("<div>").addClass("card-body");

  const cardTitle = $("<h5>").addClass("card-title").text(data.cardText);

  cardLink.css("text-decoration", "none"); // Remove hyperlink styling
  cardLink.css("color", "inherit"); // Inherit text color from parent

  cardBody.append(cardTitle);
  cardLink.append(cardImage, cardBody); // Add cardImage and cardBody to the cardLink
  cardComponent.append(cardLink); // Add the cardLink to cardComponent
  card.append(cardComponent);

  return card;
}
