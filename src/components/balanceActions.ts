import { useState } from "react";

export const Actions = () => {
  let [coins, setCoins] = useState(0);

  const resetCoins = () => {
    return setCoins(0);
  };

  const removeBalance = (amount: number) => {
    if (!amount) throw new Error("amount was not given!");

    return setCoins((coins -= amount));
  };

  const addBalance = (amount: number) => {
    if (!amount) throw new Error("amount was not given!");

    return setCoins((coins += amount));
  };

  const returnData = {
    coins,
    resetCoins,
    removeBalance,
    addBalance,
  };

  return returnData;
};
