import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getPhotos, searchPhoto } from "../redux/actions/photos";
import Card from "./Card";
import Modal from "./Modal";

const Users = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const photos = useSelector((state) => state.photos.photos);

  console.log("photos", photos);

  const handleChange = (val) => {
    setValue(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPhoto(value, page));
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setPage(page + 1);
    setIsFetching(true);
  }

  function fetchMoreListItems() {
    dispatch(searchPhoto(value, page));
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <>
      <div className="container mt-3">
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              name="keyword"
              onChange={(e) => handleChange(e.target.value)}
              className="form-control"
              placeholder="Enter Search Keyword"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              autoComplete="off"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon1"
            >
              Search
            </button>
          </div>
        </form>

        {photos.loading && <p>Loading...</p>}
        {photos.length > 0 &&
          photos.map((photo) => <Card photo={photo} key={photo.id} />)}

        {photos.length === 0 && <p>No photos available</p>}
      </div>
      <Modal />
    </>
  );
};

export default Users;
