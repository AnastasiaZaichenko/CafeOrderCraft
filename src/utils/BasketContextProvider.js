import React, { useState, createContext } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = (props) => {
  const [basket, setBasket] = useState([]);
  const [mealCount, setMealCount] = useState(0);
  const [isTakeaway, setIsTakeaway] = useState(false);

  const addBasket = (newItem) => {
    const existingIndex = basket.findIndex((item) => {
      const newItemKey = Object.keys(newItem)[0];
      return item.hasOwnProperty(newItemKey);
    });

    if (newItem?.number || newItem?.firstName) {
      setIsTakeaway(false);
    }

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

  const removeFromBasket = (index) => {
    const removedItem = basket[index];
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);

    if (removedItem.name) {
      setMealCount((prevCount) => Math.max(prevCount - 1, 0));
    }
  };

  const value = {
    basket,
    addBasket,
    mealCount,
    setIsTakeaway,
    isTakeaway,
    removeFromBasket,
  };

  return (
    <BasketContext.Provider value={value}>
      {props.children}
    </BasketContext.Provider>
  );
};
