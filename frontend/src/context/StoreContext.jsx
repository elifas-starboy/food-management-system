import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [cartItems, setCartItems] = useState({});

  const addToCard = (itemId) => {
    setCartItems((prev) => ({
      ...(prev ?? {}),
      [itemId]: (prev?.[itemId] ?? 0) + 1
    }));
  };

  const removeFromCard = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCard,
    removeFromCard
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
