const saveHandler = async (e) => {
    e.preventDefault ();
    const id = e.target.getAttribute('data-idMeal')

    const response = await fetch("/api/recipes/recipebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            idMeal: id,
            strMeal: document.getElementById("recipeTitle").value,
            strMealThumb: document.getElementById("thumbnail").getAttribute("src")
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
    e.preventDefault ();
    const id = e.target.getAttribute('data-idMeal')

    const response = await fetch(`/api/recipes/recipebook/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        })
    if (response.ok){
        // Reload the page so the button updates
        document.location.replace(`/recipe/${id}`)
    }else{
        alert("Failed to delete recipe")
    }
}

//  Add event listeners
document.getElementById("save").addEventListener("click", saveHandler)
document.getElementById("delete").addEventListener("click", deleteHandler)