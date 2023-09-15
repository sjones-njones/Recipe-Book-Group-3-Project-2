const fetchUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const addedRecipeIds = [];

// Function to fetch and add a random recipe card using async/await
const fetchAndAddRecipeCard = async () => {
  try {
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const recipeId = data.meals[0].idMeal;

    if (!addedRecipeIds.includes(recipeId)) {
      const apiResponse = {
        imgSrc: data.meals[0].strMealThumb,
        cardText: data.meals[0].strMeal,
        idMeal: data.meals[0].idMeal,
      };

      const card = createCard(apiResponse);
      const cardContainer = $(".row");
      cardContainer.append(card);

      addedRecipeIds.push(recipeId);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

// Fetch and add 8 random recipe cards using async/await
const fetchRandomRecipeCards = async () => {
  for (let i = 0; i < 8; i++) {
    await fetchAndAddRecipeCard();
  }
};

function createCard(data) {
  const card = $("<div>").addClass("col-md-3 mb-4");
  const cardComponent = $("<div>").addClass("card");

  const cardLink = $("<a>").attr("href", `/recipe/${data.idMeal}`);

  const cardImage = $("<img>")
    .addClass("card-img-top")
    .attr("src", data.imgSrc)
    .attr("alt", data.cardText);
  
  const cardBody = $("<div>").addClass("card-body");

  const cardTitle = $("<h5>").addClass("card-title text-center").text(data.cardText);

  cardLink.css("text-decoration", "none");
  cardLink.css("color", "inherit");

  cardBody.append(cardTitle);
  cardLink.append(cardImage, cardBody);
  cardComponent.append(cardLink);
  card.append(cardComponent);

  return card;
}

// Call the async function to fetch and add random recipe cards
fetchRandomRecipeCards();
