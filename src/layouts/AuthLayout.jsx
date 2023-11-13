/** @format */

import React from "react";
import { MdMovie } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="pt-5">
      <Link to="/">
        <MdMovie className="icons text-danger" />
      </Link>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
