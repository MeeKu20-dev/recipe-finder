import React from "react";

export default function RecipeModal({ recipe, isOpen, onClose, isLoading }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
 
      <div 
        className="absolute inset-0 bg-transparent"
        onClick={onClose}
      ></div>
      
      {/* Modal content */}
      <div className="relative bg-white rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b bg-white sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-gray-800">
            {isLoading ? "Loading..." : recipe?.title ? `${recipe.title}` : "Recipe"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl font-bold transition-colors duration-200"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#499c5b]"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Instructions Section */}
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Instructions</h3>
                {recipe?.analyzedInstructions && recipe.analyzedInstructions.length > 0 && recipe.analyzedInstructions[0]?.steps?.length > 0 ? (
                  <ol className="list-decimal pl-5 space-y-2">
                    {recipe.analyzedInstructions[0].steps.map((step) => (
                      <li key={step.number} className="text-gray-900">
                        {step.step}
                      </li>
                    ))}
                  </ol>
                ) : recipe?.instructions ? (
                  <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                ) : (
                  <p className="text-gray-500">No instructions available for this recipe.</p>
                )}
              </section>

              {/* Ingredients Section */}
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ingredients</h3>
                {recipe?.extendedIngredients && recipe.extendedIngredients.length > 0 ? (
                  <div className="space-y-3">
                    {recipe.extendedIngredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#499c5b] rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          <span className="font-medium">{ingredient.amount} {ingredient.unit}</span> {ingredient.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No ingredients available for this recipe.</p>
                )}
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
