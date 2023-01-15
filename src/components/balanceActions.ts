import { useState } from "react";
import { game } from "./game";

const Actions = () => {
  let [coins, setCoins] = useState(0);

  const resetCoins = () => {
    return setCoins(0);
  };

  const addBalance = (amount: number) => {
    if (!amount) throw new Error("amount was not given!");

    return setCoins((coins += amount));
  };

  const returnData = {
    coins,
    resetCoins,
    addBalance,
  };

  return returnData;
};

export default Actions;
