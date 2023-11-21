/** @format */

import React from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import Loading from "../../utils/Loading";

const Movies = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie/movies");
  const { userInput, filteredMovies } = useSearchFilter(data);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="py-5">
        <p>Opsss! Something went wrong</p>
      </div>
    );
  }

  if (userInput) {
    return (
      <SearchResults
        filteredMovies={filteredMovies}
        userInput={userInput}
        updateUI={updateUI}
      />
    );
  }

  return (
    <div>
      <div className="grid">
        {data
          ? data.map((movie) => {
              return (
                <MovieCard movie={movie} key={movie._id} updateUI={updateUI} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Movies;
