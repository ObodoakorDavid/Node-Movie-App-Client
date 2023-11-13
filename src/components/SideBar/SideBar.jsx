/** @format */

import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdSpaceDashboard, MdMovie } from "react-icons/md";
import Dropdown from "./Dropdown";

//testing
import logo from "../../assets/react.svg";
import useAuth from "../../hooks/useAuth";

const SideBar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [selected, setSelected] = useState("/");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setSelected("/");
    } else if (location.pathname === "/movies") {
      setSelected("/movies");
    } else if (location.pathname === "/tv-series") {
      setSelected("/tv-series");
    } else if (location.pathname === "/bookmark") {
      setSelected("/bookmark");
    }
  }, [location]);

  return (
    <div className="sidebar d-flex flex-md-column justify-content-between justify-content-md-start gap-md-5 px-4 py-3 mx-sm-4 position-relative">
      <Link to="/">
        <MdMovie className="icons text-danger" />
      </Link>
      <div className="d-flex flex-md-column gap-3 gap-sm-4">
        <Link to="/">
          <MdSpaceDashboard
            className={`fs-1 icons-secondary ${
              selected === "/" ? "text-white" : "icons"
            }`}
          />
        </Link>
        <Link to="/movies">
          <RiFilmFill
            className={`fs-1 icons-secondary ${
              selected === "/movies" ? "text-white" : "icons"
            }`}
          />
        </Link>
        <Link to="/tv-series">
          <PiTelevisionFill
            className={`fs-1 icons-secondary ${
              selected === "/tv-series" ? "text-white" : "icons"
            }`}
          />
        </Link>
        <Link to="/bookmark">
          <BsFillBookmarkFill
            className={`fs-1 icons-secondary ${
              selected === "/bookmark" ? "text-white" : "icons"
            }`}
          />
        </Link>
      </div>

      <div className="mt-md-auto">
        <img src={user ? user.image : logo} onClick={handleDropdown} alt="" />
        {isOpen ? <Dropdown handleDropdown={handleDropdown} /> : null}
      </div>
    </div>
  );
};

export default SideBar;
