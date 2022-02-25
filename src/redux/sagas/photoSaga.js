import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "https://api.unsplash.com/photos";
let searchResult = [];
console.log("result =>", searchResult);

function getApi() {
  const config = {
    headers: {
      Authorization: "Client-ID ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4",
    },
  };
  return axios
    .get(`${apiUrl}`, config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getApiPhoto(id) {
  const config = {
    headers: {
      Authorization: "Client-ID ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4",
    },
  };
  return axios
    .get(`${apiUrl}/${id}`, config)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
function searchApiPhoto(param, page) {
  console.log("pagee =>", page);
  const config = {
    headers: {
      Authorization: "Client-ID CaVyNcHIKOZkP7cRY-JiipOfzXc2Q-xwd_gXbrnZrmA",
    },
  };
  return axios
    .get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${param}`,
      config
    )

    .then((res) => {
      searchResult.push(...res.data.results);
      console.log("datas =>", searchResult);
      return searchResult;
    })
    .catch((err) => {
      console.log(err);
    });
}

function* fetchPhotos(action) {
  try {
    const photos = yield call(getApi);

    yield put({
      type: "GET_PHOTOS_SUCCESS",
      photos,
    });
  } catch (error) {}
}

function* fetchPhoto(action) {
  try {
    const photo = yield call(getApiPhoto, action.id);

    yield put({
      type: "GET_PHOTO_SUCCESS",
      photo,
    });
  } catch (error) {}
}
function* fetchSearchPhoto(action) {
  try {
    const photos = yield call(searchApiPhoto, action.param, action.page);
    console.log("ids", photos);

    yield put({
      type: "SEARCH_PHOTO_SUCCESS",
      photos,
    });
  } catch (error) {}
}

function* photoSaga() {
  yield takeEvery("GET_PHOTOS_REQUESTED", fetchPhotos);
  yield takeEvery("GET_PHOTO_REQUESTED", fetchPhoto);
  yield takeEvery("SEARCH_PHOTO_REQUESTED", fetchSearchPhoto);
}

export default photoSaga;
