/** @format */

import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./Search.css";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInput, setUserInput] = useState("");
  const [placeholder, setPlaceholder] = useState("/");

  useEffect(() => {
    setUserInput(searchParams.get("search"));
  }, [searchParams]);

  useEffect(() => {
    if (location.pathname === "/") {
      setPlaceholder("Search for movies or TV series");
    } else if (location.pathname === "/movies") {
      setPlaceholder("Search for movies");
    } else if (location.pathname === "/tv-series") {
      setPlaceholder("Search for TV series");
    } else if (location.pathname === "/bookmark") {
      setPlaceholder("Search for bookmarked shows");
    }
  }, [location.pathname]);

  return (
    <div className="search position-relative my-3">
      <BiSearch className="fs-1 position-absolute top-0 bottom-0 my-auto start-0" />
      <input
        style={{
          backgroundColor: "#10141f",
        }}
        className="fw-semibold fs-5 px-2 py-2 ps-5 text-danger w-100 my-3 my-md-2"
        type="text"
        value={userInput ? userInput : ""}
        onChange={(e) => {
          setSearchParams({ search: e.target.value });
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
