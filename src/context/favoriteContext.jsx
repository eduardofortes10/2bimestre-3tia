import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    if (!favorites.some(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (itemId) => {
    setFavorites(favorites.filter(item => item.id !== itemId));
  };

  const isFavorite = (itemId) => {
    return favorites.some(item => item.id === itemId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
export const UseFavorites = () => useContext(FavoritesContext);
