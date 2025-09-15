import { useState } from 'react';
import { recipeService } from '../services/recipeService';

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const searchRecipes = async (query) => {
    try {
      const results = await recipeService.searchRecipes(query);
      setRecipes(results);
    } catch (error) {
      console.error("Failed to search recipes:", error);
      setRecipes([]);
    }
  };

  const fetchRecipeDetails = async (recipe) => {
    try {
      const detailedRecipe = await recipeService.fetchRecipeDetails(recipe.id);
      setSelectedRecipe(detailedRecipe);
      return detailedRecipe;
    } catch (error) {
      console.error("Failed to fetch recipe details:", error);
      setSelectedRecipe(recipe); // Fallback to basic recipe
      return recipe;
    }
  };

  const clearSelectedRecipe = () => {
    setSelectedRecipe(null);
  };

  return {
    recipes,
    selectedRecipe,
    searchRecipes,
    fetchRecipeDetails,
    clearSelectedRecipe
  };
};
