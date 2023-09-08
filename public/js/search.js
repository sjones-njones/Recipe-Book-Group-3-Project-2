let catString;
const category = document.getElementById("category");
const search = document.getElementById("search-button");

search.addEventListener("click", () => {
  catString = getCategory();
  location.href = "/search/" + catString;
});

function getCategory() {
  return category.value;
}
