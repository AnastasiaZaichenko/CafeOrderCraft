import React, { useState, createContext } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = (props) => {
  const [basket, setBasket] = useState([]);
  const [mealCount, setMealCount] = useState(0);

  const addBasket = (newItem) => {
    const existingIndex = basket.findIndex((item) => {
      const newItemKey = Object.keys(newItem)[0];
      return item.hasOwnProperty(newItemKey);
    });

    if (
      (existingIndex !== -1 && newItem?.number) ||
      (existingIndex !== -1 && newItem?.firstName)
    ) {
      const updatedBasket = [...basket];
      const existingItem = updatedBasket[existingIndex];

      Object.keys(newItem).forEach((key) => {
        existingItem[key] = newItem[key];
      });

      setBasket(updatedBasket);
    } else {
      setBasket((prev) => [...prev, newItem]);
      if (newItem.name) {
        setMealCount((prevCount) => prevCount + 1);
      }
    }
  };

  const value = {
    basket,
    addBasket,
    mealCount,
  };

  return (
    <BasketContext.Provider value={value}>
      {props.children}
    </BasketContext.Provider>
  );
};
