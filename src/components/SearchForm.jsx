import React, { useState } from "react";

export default function SearchForm({ onRecipesUpdate }) {
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    await onRecipesUpdate(searchTerm);
  }

  return (
    <div className="w-full flex items-center justify-center">
      <form className="w-full max-w-xl flex" onSubmit={handleSearch}>
        <input
          className="flex-1 border border-none bg-white border-r-0 p-2.5 rounded-l-lg min-w-0"
          type="text"
          placeholder="Search Cuisine"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="border border-solid rounded-r-lg p-2.5 px-4 bg-[#499c5b] text-white" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
