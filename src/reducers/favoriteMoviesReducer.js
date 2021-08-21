//manage favorites state here

import {
  ADD_FAVORITE,
  TOGGLE_DISPLAY_FAVORITES,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favoriteMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case TOGGLE_DISPLAY_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default favoriteMoviesReducer;
