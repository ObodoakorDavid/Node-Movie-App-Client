import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dropdown = ({ handleDropdown }) => {
  const { token, handleLogOut } = useAuth();
  return (
    <div className="position-absolute dropdown">
      {token ? (
        <div className="d-flex flex-column gap-2">
          <Link to="/update" className="btn text-white bg-danger">
            Update Profile
          </Link>
          <button
            onClick={() => {
              handleLogOut();
            }}
            className="btn text-white bg-danger"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column gap-2">
          <Link
            onClick={handleDropdown}
            className="btn text-white bg-danger"
            to="/signin"
          >
            LogIn
          </Link>
          <Link
            onClick={handleDropdown}
            className="btn text-white bg-danger"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
