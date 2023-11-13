import React from "react";
import Trending from "./Trending";
import Recommended from "./Recommended";
import { useFetch } from "../../hooks/useFetch";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useSearchFilter } from "../../hooks/useSearchFilter";

const Home = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie");
  const { userInput, filteredMovies } = useSearchFilter(data);

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
    <div className="text-start">
      <div>
        <h1 className="py-2">Trending</h1>
        <Trending
          movies={data}
          error={error}
          loading={loading}
          updateUI={updateUI}
        />
      </div>

      <div>
        <h1 className="py-2">Recommended For You</h1>
        <Recommended
          movies={data}
          error={error}
          loading={loading}
          updateUI={updateUI}
        />
      </div>
    </div>
  );
};

export default Home;
