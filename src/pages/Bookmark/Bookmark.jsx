/** @format */

import React from "react";
import { useFetch } from "../../hooks/useFetch";
import useAuth from "../../hooks/useAuth";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import SearchResults from "../../components/SearchResults/SearchResults";

const Bookmark = () => {
  const { token } = useAuth();
  const {
    data: bookmarks,
    loading,
    error,
    updateUI,
  } = useFetch("/api/bookmark", token);
  const { userInput, filteredMovies } = useSearchFilter(bookmarks);

  if (loading) {
    return <p className="py-5 w-100">Loading...</p>;
  }

  if (error) {
    return <p className="py-5">{error}</p>;
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
    <div className="grid">
      {bookmarks
        ? bookmarks.map((movie) => {
            return (
              <MovieCard movie={movie} key={movie._id} updateUI={updateUI} />
            );
          })
        : null}
    </div>
  );
};

export default Bookmark;
