// UserContext.js
import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { actionTypes } from "./reducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFavorite = (product) => {
    dispatch({ type: actionTypes.ADD_FAVORITE, payload: product });
  };

  const removeFavorite = (productId) => {
    dispatch({ type: actionTypes.REMOVE_FAVORITE, payload: productId });
  };

  const value = {
    favorites: state.favorites,
    addFavorite,
    removeFavorite,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
