import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

const Recommended = ({ movies, error, loading, updateUI }) => {
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
    <div className="">
      <div className="grid">
        {movies
          ? movies.map((movie) => {
              return (
                <MovieCard movie={movie} key={movie._id} updateUI={updateUI} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Recommended;
