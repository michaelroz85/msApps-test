import { FETCH_IMAGES_SUCCESS, SELECT_PAGE, SELECT_CATEGORY, SELECT_SORT_BY } from "./actions";

const initialState = {
  images: [],
  category: "cute dogs",
  page: 1,
  sortBy: "id"
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {// the functions
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case SELECT_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
      case SELECT_SORT_BY:
        return {
          ...state,
          sortBy: action.payload,
        };
    default:
      return state;
  }
}
