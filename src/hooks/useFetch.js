/** @format */
import { useState, useEffect, useMemo } from "react";
import axiosInstance from "../utils/axiosConfig";
import toast from "react-hot-toast";

export const useFetch = (endpoint, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // use axios to fetch data
    async function getData() {
      try {
        const { data } = await axiosInstance.get(endpoint, {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        });
        // console.log(data.data);
        setData(data.data);
      } catch (err) {
        console.log(err);
        setError("Something Went Wrong");
      } finally {
        setLoading(false);
      }
    }
    
    setTimeout(() => {
      getData();
    }, 2000);
  }, [endpoint]);

  useEffect(() => {
    if (data) {
      localStorage.setItem(endpoint, JSON.stringify(data));
    }
  }, [data, endpoint]);

  // Adding Bookmark

  const handleAddBookmark = async (movieId, token) => {
    try {
      const { data } = await axiosInstance.get(`/api/bookmark/add/${movieId}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
      toast.success(data.message);
    } catch (error) {
      toast.error("You have to log in to bookmark");
    }
  };

  // Removing Boomark

  const handleRemoveBookmark = async (movieId, token) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/bookmark/remove/${movieId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        }
      );
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, try again");
    }
  };

  // =========== updateUI ===============

  const updateUI = (action, userId, movieId, token) => {
    if (!token) {
      return toast.error("Login to bookmark");
    }

    if (action === "remove") {
      const updatedData = data.map((movie) => {
        if (movie._id == movieId && movie.BookmarkBy.includes(userId)) {
          return {
            ...movie,
            BookmarkBy: [
              movie.BookmarkBy.filter((eachId) => eachId !== userId),
            ],
          };
        } else {
          return movie;
        }
      });
      setData(updatedData);
      handleRemoveBookmark(movieId, token);
      return;
    }
    // =========================
    console.log(data);
    const updatedData = data.map((movie) => {
      if (movie._id == movieId && !movie.BookmarkBy.includes(userId)) {
        return {
          ...movie,
          BookmarkBy: [...movie.BookmarkBy, userId],
        };
      } else {
        return movie;
      }
    });
    setData(updatedData);
    handleAddBookmark(movieId, token);
  };

  return { data, error, loading, updateUI };
};
