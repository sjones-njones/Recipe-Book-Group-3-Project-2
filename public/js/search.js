let catString;
const category = document.getElementById("category");
const search = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

search.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("clicked")
  catString = searchBar.value;
  document.location.replace(`/search/${catString}`)
});

$(".dropdown-item").on("click", (e)=>{
  console.log(e.target.text)
  const userCategory = e.target.text;
  searchBar.value=userCategory
})

