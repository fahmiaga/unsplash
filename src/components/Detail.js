import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getPhoto } from "../redux/actions/photos";

const Detail = () => {
  const history = useHistory();
  const { id } = useParams();
  const photo = useSelector((state) => state.photos.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoto(id));
  }, []);

  console.log("photo _>", photo);

  return (
    <>
      <div className="container">
        {!photo ? (
          <p>Loading...</p>
        ) : (
          <div className="mt-4">
            <div className="row">
              <div className="col-md-6">
                <img src={photo.urls.regular} alt="" width="500px" />
                <p className="text-muted">{photo.user.portfolio_url}</p>
              </div>
              <div className="col-md-6">
                <div>
                  <h6>Photo By</h6>
                  <p>
                    {photo.user.first_name} {photo.user.last_name}
                  </p>
                  {photo.tags.map((tag, i) => (
                    <span key={i}>#{tag.title} </span>
                  ))}
                </div>
                <button
                  className="btn btn-primary text-white"
                  onClick={() => history.push("/")}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
