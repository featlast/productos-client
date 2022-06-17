import { createContext, useState } from "react";

//const [itemsCounter, setItemsCounter] = useState("");

export const CounterContext = createContext({
  itemsCounter: 0,
  setItemsCounter: (counter) => {
    this.itemsCounter = counter;
  },
});

//itemsCounter, setItemsCounter
