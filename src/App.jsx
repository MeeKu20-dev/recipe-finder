import React from "react";
import CuisineList from "./components/CuisineList";
import Header from './components/Header.jsx'
import RecipeModal from './components/RecipeModal.jsx'
import { useRecipeModal } from './hooks/useRecipeModal.js'


export default function App() {
  const {
    recipes,
    selectedRecipe,
    isModalOpen,
    isLoading,
    searchRecipes,
    handleRecipeClick,
    handleCloseModal
  } = useRecipeModal();

  return (
    <>
      <Header onRecipesUpdate={searchRecipes} />
      <CuisineList recipes={recipes} onRecipeClick={handleRecipeClick} />
      <RecipeModal 
        recipe={selectedRecipe} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        isLoading={isLoading}
      />
    </>
  );
}
