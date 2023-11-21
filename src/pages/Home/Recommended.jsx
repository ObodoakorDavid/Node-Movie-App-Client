import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loading from "../../utils/Loading";

const Recommended = ({ movies, error, loading, updateUI }) => {
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
