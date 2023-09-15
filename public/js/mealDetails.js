const saveHandler = async (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('data-idMeal');

    const response = await fetch("/api/recipes/recipebook", {
        
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            idMeal: id,
            strMeal: document.getElementById("recipeTitle").textContent,
            strMealThumb: document.getElementById("detailThumbnail").src,
        })
    });
    if (response.ok){
        // Reload the page so the button updates
        document.location.replace(`/recipe/${id}`)
    }else{
        alert("Failed to save recipe")
    }
}

const deleteHandler = async (e) => {
    console.log("clicked delete")
    e.preventDefault ();
    const id = e.target.getAttribute('data-idMeal')


  const response = await fetch(`/api/recipes/recipebook/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    // Reload the page so the button updates
    document.location.replace(`/recipe/${id}`);
  } else {
    alert('Failed to delete recipe');
  }
};

document.getElementById("button-swapper").addEventListener("click", function(e){
    if (e.target.textContent === "Save"){
        saveHandler(e)
    }else if (e.target.textContent === "Delete"){
        deleteHandler(e)
    }
})

document.getElementById("printButton").addEventListener("click", ()=>{
  window.print()
})