import axios from "axios";

export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
export const SELECT_PAGE = "SELECT_PAGE";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const SELECT_SORT_BY = "SELECT_SORT_BY";

export function fetchImagesSuccess(images) {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: images,
  };
}

export function fetchImages(category, page, sortBy) {// get the images from the backend with the parameters that we got from the user
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3000/api/images?category=${category}&page=${page}&sortBy=${sortBy}`);
    const data = await response.json();
    dispatch(fetchImagesSuccess(data));
  };
}
// evrey function get the payload
export function selectPage(page) {
  return {
    type: SELECT_PAGE,
    payload: page,
  };
}

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    payload: category,
  };
}

export function selectSortBy(sortBy) {
  return {
    type: SELECT_SORT_BY,
    payload: sortBy,
  };
}

