let catString;
const category = document.getElementById("category");
const search = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

search.addEventListener("click", (e) => {
  e.preventDefault()
  catString = searchBar.value;
  document.location.replace(`/search/${catString}`)
});
// Update the search bar with the selected category
$(".dropdown-item").on("click", (e)=>{
  console.log(e.target.text)
  const userCategory = e.target.text;
  searchBar.value=userCategory
})

