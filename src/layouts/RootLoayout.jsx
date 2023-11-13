/** @format */

import React, { useEffect, useMemo, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Search from "../components/Search/Search";

const RootLoayout = () => {
  const { handleGetUser } = useAuth();

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div className="layout pt-sm-4 d-md-flex position-relative">
      <SideBar />
      <div className=" px-4 px-sm-4 w-100">
        <Search />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLoayout;
