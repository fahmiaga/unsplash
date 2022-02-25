import {
  GET_PHOTOS_REQUESTED,
  GET_PHOTO_REQUESTED,
  SEARCH_PHOTO_REQUESTED,
} from "../types";

export function getPhotos() {
  return {
    type: GET_PHOTOS_REQUESTED,
  };
}
export function getPhoto(id) {
  return {
    type: GET_PHOTO_REQUESTED,
    id,
  };
}
export function searchPhoto(param, page) {
  return {
    type: SEARCH_PHOTO_REQUESTED,
    param,
    page,
  };
}
