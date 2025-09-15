import { useModal } from './useModal';
import { useRecipes } from './useRecipes';

export const useRecipeModal = () => {
  const modal = useModal();
  const recipes = useRecipes();

  const handleRecipeClick = async (recipe) => {
    modal.setLoading(true);
    modal.openModal();
    
    try {
      await recipes.fetchRecipeDetails(recipe);
    } finally {
      modal.setLoading(false);
    }
  };

  const handleCloseModal = () => {
    modal.closeModal();
    recipes.clearSelectedRecipe();
  };

  return {
    // Modal state
    isModalOpen: modal.isOpen,
    isLoading: modal.isLoading,
    
    // Recipe state
    recipes: recipes.recipes,
    selectedRecipe: recipes.selectedRecipe,
    
    // Actions
    searchRecipes: recipes.searchRecipes,
    handleRecipeClick,
    handleCloseModal
  };
};
