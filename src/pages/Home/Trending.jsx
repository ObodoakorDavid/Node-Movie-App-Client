import React from "react";
import MovieCarousel from "./MovieCarousel";

const Trending = ({ movies, error, loading, updateUI }) => {
  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Opsss! Something went wrong</p>
      </div>
    );
  }

  return (
    <div>
      {movies ? <MovieCarousel movies={movies} updateUI={updateUI} /> : null}
    </div>
  );
};

export default Trending;
