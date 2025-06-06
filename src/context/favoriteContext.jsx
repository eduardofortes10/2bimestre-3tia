import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    if (!favorites.some(fav => fav.code === item.code)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (itemCode) => {
    setFavorites(favorites.filter(item => item.code !== itemCode));
  };

  const isFavorite = (itemCode) => {
    return favorites.some(item => item.code === itemCode);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
