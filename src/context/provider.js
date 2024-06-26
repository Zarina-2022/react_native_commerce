import React from 'react';
import {createContext, useState} from 'react';

export const StoreContext = createContext({});

export default function BadgeContextProvider({children}) {
  const [badge, setBadge] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const addProductToCart = product => {
    setBadge([...badge, product]);
  };

  const addProductToFavourites = product => {
    setFavourites([...favourites, product]);
  };

  const addBadge = product => {
    setBadge([...badge, product]);
  };

  

  return (
    <StoreContext.Provider
      value={{
        badge,
        addBadge,
        addProductToCart,
        isLogin,
        setIsLogin,
        favourites,
        setFavourites,
        addProductToFavourites,
      }}>
      {children}
    </StoreContext.Provider>
  );
}
