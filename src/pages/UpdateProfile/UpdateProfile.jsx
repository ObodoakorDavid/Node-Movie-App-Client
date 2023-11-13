/** @format */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../utils/Spinner";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  const { isAuthenticating, handleUpdateUser, user } = useAuth();
  const [tempImage, setTempImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.image[0]);
    const payload = new FormData();
    payload.append("image", data.image[0]);
    payload.append("password", data.password);
    handleUpdateUser(payload);
  };

  const btnText = isAuthenticating ? <Spinner /> : "Change Photo";

  return (
    <div className="py-5 update-profile">
      <img
        className="rounded-circle mb-4"
        src={tempImage ? tempImage : user ? user.image : null}
        alt=""
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        encType="multipart/form-data"
        className="d-flex flex-column gap-4 mx-auto"
      >
        <div>
          <input
            className="bg-danger w-100 rounded-1"
            type="file"
            accept="image/*"
            onChange={(e) => {}}
            {...register("image", {
              required: true,
              onChange: (e) => {
                setTempImage(URL.createObjectURL(e.target.files[0]));
              },
            })}
          />
          {errors.image && (
            <span className="text-start">Please select a photo</span>
          )}
        </div>
        <div className=" position-relative">
          <input
            className={`w-100 p-2 custom-bg-dark-gray ${
              errors.password ? "border-danger border-2" : ""
            }`}
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className=" position-absolute bottom-0 end-0 pb-2">
              Can't be empty
            </span>
          )}
        </div>
        <button
          disabled={isAuthenticating}
          className="btn py-2 bg-danger text-white border-0"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
