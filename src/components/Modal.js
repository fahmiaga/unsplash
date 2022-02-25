import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Modal = () => {
  const modal = useSelector((state) => state.photos.modal);
  const thumb = useSelector((state) => state.photos.thumb);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: "CHANGE_MODAL", modal: false });
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {modal ? (
        <div className="cover">
          <div onClick={() => handleClose()}>
            <div className="image-show">
              <h4 className="close-button">X</h4>

              <img src={thumb} alt="" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
