import React, { useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import DriverCard from "./DriverCard";
import GameService from "../../services/GameService";
import { DriversContext } from "../../contexts/DriversContext";

const BettingGame = () => {
  const { drivers } = useContext(DriversContext);
  const {
    selectedDriver,
    setSelectedDriver,
    betAmount,
    setBetAmount,
    result,
    setResult,
    wallet,
    handleBetOutcome,
  } = useContext(GameContext);

  const handleDriverSelect = (driverId) => {
    setSelectedDriver(driverId);
  };

  const handleBetAmountChange = (amount) => {
    setBetAmount(amount);
  };

  const handlePlaceBet = () => {
    const gameResult = GameService.playGame(selectedDriver);
    setResult(gameResult);
    handleBetOutcome();
  };

  return (
    <section>
      <h2>Place Your Bet</h2>
      {drivers.map((driver) => (
        <DriverCard
          key={driver.id}
          id={driver.id}
          name={driver.name}
          onSelect={handleDriverSelect}
        />
      ))}
      {selectedDriver && (
        <div>
          <p>Selected Driver: {selectedDriver}</p>
          <p>Bet Amount: {betAmount}</p>
        </div>
      )}
      <input
        type="number"
        value={betAmount}
        onChange={(e) => handleBetAmountChange(e.target.value)}
      />
      <button onClick={handlePlaceBet}>Place Bet</button>
      {result && <p>{result}</p>}
      <p>Wallet: {wallet}</p>
    </section>
  );
};

export default BettingGame;
