const fetchUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

$(document).ready(function () {
  fetch(fetchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Handle the JSON data
      console.log(data);

      const apiResponse = {
        imgSrc: data.meals[0].strMealThumb,
        cardText: data.meals[0].strMeal,
      };

      const card = createCard(apiResponse);
      const cardContainer = $("#card-container");
      cardContainer.append(card);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
});

function createCard(data) {
  const card = $("<div>").addClass("card").css("width", "18rem");
  const cardImage = $("<img>").addClass("card-img-top").attr("src", data.imgSrc).attr("alt", "Card Image");
  const cardBody = $("<div>").addClass("card-body");
  const cardText = $("<p>").addClass("card-text").text(data.cardText);

  cardBody.append(cardText);
  card.append(cardImage, cardBody);

  return card;
}