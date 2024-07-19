import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFavorite = (productId) => {
    setFavorites(favorites.filter((item) => item.id !== productId));
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
