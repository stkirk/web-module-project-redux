//manage favorites state here

import { ADD_FAVORITE } from "../actions/favoriteActions";

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
    default:
      return state;
  }
};

export default favoriteMoviesReducer;
