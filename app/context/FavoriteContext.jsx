import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (repo) => {
    setFavorites((prevFavorites) => [...prevFavorites, repo]);
  };

  const removeFavorite = (repoId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(repo => repo.id !== repoId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;