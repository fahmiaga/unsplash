import {
  GET_PHOTOS_REQUESTED,
  GET_PHOTOS_SUCCESS,
  GET_PHOTO_REQUESTED,
  GET_PHOTO_SUCCESS,
  CHANGE_MODAL,
  SEARCH_PHOTO_SUCCESS,
  SEARCH_PHOTO_REQUESTED,
} from "../types";

const initialState = {
  photos: [],
  photo: "",
  loading: false,
  modal: false,
  thumb: "",
};

export default function users(state = initialState, action) {
  // const { type, payload } = action;
  switch (action.type) {
    case GET_PHOTOS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.photos,
      };
    case GET_PHOTO_REQUESTED:
      return {
        ...state,
        loading: true,
        photo: action.photo,
      };
    case GET_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        photo: action.photo,
      };
    case CHANGE_MODAL:
      return {
        ...state,
        modal: action.modal,
        thumb: action.thumb,
      };
    case SEARCH_PHOTO_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_PHOTO_SUCCESS:
      let newData = Object.assign(action.photos);
      console.log("free", newData);
      return {
        ...state,
        loading: false,
        photos: newData,
      };

    default:
      return state;
  }
}
