import { createContext } from "react";

export const CounterContext = createContext({
  itemsCounter: 0,
  setItemsCounter: (counter) => {
    this.itemsCounter = counter;
  },
});
