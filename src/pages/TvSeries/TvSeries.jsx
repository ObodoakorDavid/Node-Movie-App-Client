/** @format */
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import SearchResults from "../../components/SearchResults/SearchResults";
import Loading from "../../utils/Loading";

const TvSeries = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie/series");
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
      {userInput ? (
        <SearchResults
          filteredMovies={filteredMovies}
          userInput={userInput}
          updateUI={updateUI}
        />
      ) : (
        <div className="grid">
          {data
            ? data.map((movie) => {
                return (
                  <MovieCard
                    movie={movie}
                    key={movie._id}
                    updateUI={updateUI}
                  />
                );
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default TvSeries;
