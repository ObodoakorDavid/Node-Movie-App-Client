/** @format */

import React from "react";
import "./MovieCard.css";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";

const MovieCard = ({ movie, updateUI }) => {
  const { _id: id, Title, Image, Year, Type, BookmarkBy } = movie;

  const { token, user } = useAuth();

  const bookmarkIcon = BookmarkBy.includes(user?.id) ? (
    <BiSolidBookmark
      onClick={() => {
        updateUI("remove", user?.id, id, token);
      }}
      className="bookmark_icon rounded-5 position-absolute text-white"
    />
  ) : (
    <BiBookmark
      onClick={() => {
        updateUI("add", user?.id, id, token);
      }}
      className="bookmark_icon rounded-5 position-absolute text-white"
    />
  );

  return (
    <div key={id} className="movie_card position-relative px-0">
      <img className="w-100 rounded-2" src={Image} alt="" />
      {bookmarkIcon}
      <div className="d-flex align-items-center gap-2 text-secondary fw-semibold my-2">
        <span className="d-flex gap-2">
          <p className="m-0">{Year}</p>
        </span>
        <span className="d-flex gap-2">
          <span className="d-flex gap-1 align-items-center">
            {Type === "movie" ? <RiFilmFill /> : <PiTelevisionFill />}
            <p className="m-0">{Type === "movie" ? "Movie" : "TV Series"}</p>
          </span>
        </span>
        <span className="d-flex gap-2">
          <p className="m-0">PG</p>
        </span>
      </div>
      <p className="text-start fw-semibold fs-4">{Title}</p>
    </div>
  );
};

export default MovieCard;
