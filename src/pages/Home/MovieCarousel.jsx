import React from "react";
import "./Home.css";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";

const MovieCarousel = ({ movies, updateUI }) => {
  const { user, token } = useAuth();

  return (
    <div className="carousel">
      <div className="inner_carousel d-flex gap-3 ">
        {movies.map((movie) => {
          //destructuring properties from each movie
          const {
            _id: id,
            Title,
            Image,
            Year,
            Rated,
            Type,
            BookmarkBy,
          } = movie;

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
            <div key={id} className="position-relative carousel_item rounded-2">
              <img src={Image} alt="" />
              {bookmarkIcon}
              <div className="gap-2 position-absolute">
                <div className="d-flex align-items-center gap-1 fw-medium">
                  <p className="m-0">{Year}</p>
                  <span className="d-flex gap-1 align-items-center">
                    {Type === "movie" ? <RiFilmFill /> : <PiTelevisionFill />}
                    <p className="m-0">
                      {Type === "movie" ? "Movie" : "TV Series"}
                    </p>
                  </span>
                  <p className="m-0">{Rated}</p>
                </div>
                <p className="text-start fs-4 fw-semibold text-white mb-3">
                  {Title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCarousel;
