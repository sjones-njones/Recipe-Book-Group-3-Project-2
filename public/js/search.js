const category = document.getElementById("category");
let catString = function logger() {
  category.addEventListener("change", () => {
    //   console.log(category.value);
    const result = category.value;
    return result;
    //   Expected value: seafood, vegan, dessert, breakfast
  });
};
console.log(catString());
