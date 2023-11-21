import React from "react";
import MovieCarousel from "./MovieCarousel";
import Loading from "../../utils/Loading";

const Trending = ({ movies, error, loading, updateUI }) => {
  if (loading) {
    return <Loading />;
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
