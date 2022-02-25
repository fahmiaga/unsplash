import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // const [modal, setModal] = useState(false);

  const handleImage = (thumb) => {
    dispatch({ type: "CHANGE_MODAL", modal: true, thumb });
    document.body.style.overflow = "hidden";
  };

  // console.log(modal);

  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img
                src={props.photo.urls.thumb}
                alt=""
                className="img-thumbnail"
                style={{ cursor: "pointer" }}
                onClick={() => handleImage(props.photo.urls.regular)}
              />

              <p className=" text-muted">{props.photo.user.location}</p>
            </div>
            <div className="col-md-4">
              <h5 className="card-title">Photo by</h5>
              <p>
                {props.photo.user.first_name} {props.photo.user.last_name}
              </p>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-info text-light"
                onClick={() => history.push(`/detail/${props.photo.id}`)}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
