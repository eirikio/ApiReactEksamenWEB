import { createContext, useContext, useState } from "react";
import { DriversContext } from "./DriversContext";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const { getById } = useContext(DriversContext);

  const [selectedDriver, setSelectedDriver] = useState(null);
  const [betAmount, setBetAmount] = useState(0);
  const [result, setResult] = useState(null);
  const [wallet, setWallet] = useState(1000); // Initial wallet amount (you can set it to any value)

  const getSelectedDriver = () => {
    if (selectedDriver) {
      return getById(selectedDriver);
    }
    return null;
  };

  const handleBetOutcome = () => {
    if (result === "win") {
      setWallet(wallet + betAmount + betAmount * 1); // Win: get back the original bet + 100%
    } else {
      setWallet(wallet - betAmount); // Loss: lose the bet amount
    }
  };

  return (
    <GameContext.Provider
      value={{
        selectedDriver,
        setSelectedDriver,
        betAmount,
        setBetAmount,
        result,
        setResult,
        wallet,
        handleBetOutcome,
        getSelectedDriver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
