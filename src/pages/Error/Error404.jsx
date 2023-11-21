/** @format */

import React from "react";
import errorImage from "../../assets/images/3747371.jpg";
import "./Error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error py-5">
      <img src={errorImage} className="rounded-4" alt="" />
      <div className="py-4">
        <p className=" fw-bold fs-2 m-0">Oooops! Looks Like You're Lost.</p>
        <p className="fs-5 m-0">Lets fix that by going back Home</p>
      </div>
      <Link to="/" className="btn text-white bg-danger px-4">
        Go Home
      </Link>
    </div>
  );
};

export default Error404;
