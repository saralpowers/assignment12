function Recipe(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
    this.recipe = function() {
        console.log(`${title}`);
        console.log(`Serves: ${servings}`);
        for (let i = 0; i < ingredients.length; i++) {
            console.log(`- ${ingredients[i]}`);
        }
        
    }
}

const favRecipe = new Recipe('Guacamole', 4, ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]);

favRecipe.recipe();

