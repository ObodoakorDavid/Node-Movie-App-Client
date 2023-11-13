/** @format */

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchFilter = (data) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredMovies, setFilteredMovies] = useState([]);

  const userInput = useMemo(() => searchParams.get("search"), [searchParams]);

  useEffect(() => {
    if (data) {
      const searchedMovies = data.filter((movie) => {
        return movie.Title.toLowerCase().includes(userInput?.toLowerCase());
      });
      setFilteredMovies(searchedMovies);
    }
  }, [searchParams, data]);

  return { userInput, filteredMovies };
};
