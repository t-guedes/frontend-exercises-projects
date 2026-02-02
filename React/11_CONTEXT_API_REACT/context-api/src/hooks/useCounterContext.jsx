import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    console.log("Contexto não encontado!");
    return;
  }

  console.log(context);

  return context;
};
