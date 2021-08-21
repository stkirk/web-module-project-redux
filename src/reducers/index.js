import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriteMoviesReducer from "./favoriteReducer";

const rootReducer = combineReducers({ movieReducer, favoriteMoviesReducer });

export default rootReducer;
