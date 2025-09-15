import React from "react";


export default function CuisineList({ recipes, onRecipeClick }) {
 
  return (
    <div className="w-full max-w-[95%] my-4 mx-auto px-4">
      {recipes.length > 0 ? (
        <ul className="list-none p-0 m-0 grid [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="bg-white rounded-[14px] shadow-md overflow-hidden flex flex-col transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl max-h-80 h-full"
            >
              <img className="w-full h-40 object-cover block" src={recipe.image} alt={recipe.title} />
              <h3 className="text-base font-semibold pt-3 pr-[0.9rem] pb-4 pl-[0.9rem] text-[#222] leading-snug">{recipe.title}</h3>
              <button 
                onClick={() => onRecipeClick(recipe)}
                className="mt-auto w-full py-3 px-4 text-white bg-[#499c5b] border-0 border-t border-[#e9edf3] font-semibold cursor-pointer hover:bg-[#3d7a4a] transition-colors duration-200"
              >
                Show Recipe
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-[#666] py-8">No recipes yet. Try searching!</p>
      )}
     
    </div>
  );
}
