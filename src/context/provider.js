import React from 'react';
import {createContext, useState} from 'react';

export const StoreContext = createContext({});

export default function BadgeContextProvider({children}) {
  const [badge, setBadge] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const addProductToCart = product => {
    setBadge([...badge, product]);
  };

  return (
    <StoreContext.Provider
      value={{badge, addProductToCart, isLogin, setIsLogin}}>
      {children}
    </StoreContext.Provider>
  );
}
