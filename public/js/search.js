let catString;
const category = document.getElementById('category');
const search = document.getElementById('search-button');



search.addEventListener("click", (e) => {
  e.preventDefault()
  catString=category.text
  document.location.replace(`/search/${catString}`)
});
// Update the search bar with the selected category
$(".dropdown-item").on("click", (e)=>{
  category.text= e.target.text.trim();
})