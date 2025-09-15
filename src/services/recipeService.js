import axios from "axios";

class RecipeService {
    async searchRecipes(query, number = 10) {
    try {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      if (!apiKey) {
        throw new Error("API key not found. Please set VITE_SPOONACULAR_API_KEY in your environment variables.");
      }
      
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          apiKey: apiKey,
          query: query,
          number: number,
        },
      });
      
      return response.data.results || [];
    } catch (error) {
      console.error("Error searching recipes:", error);
      throw error;
    }
  }
  async fetchRecipeDetails(recipeId) {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
        params: {
          apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
          includeNutrition: true,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      throw error;
    }
  }


}

export const recipeService = new RecipeService();
