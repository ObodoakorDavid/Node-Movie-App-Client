/** @format */

import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const SearchResults = ({ filteredMovies, userInput, updateUI }) => {
  return (
    <div className="text-start">
      <h1>
        Found {filteredMovies.length} results for '{userInput}'
      </h1>
      <div className="grid pt-3">
        {filteredMovies.map((movie) => {
          return (
            <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
