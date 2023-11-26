const GameService = {
  // Simulate the game and determine the winner
  playGame: (selectedDriver) => {
    const isWinner = Math.random() < 0.5; // 50% chance of winning, adjust as needed

    // Update user's cash based on the game result
    const updateUserCash = (currentCash, betAmount) => {
      return isWinner ? currentCash + betAmount : currentCash - betAmount;
    };

    // Return the game result message
    return isWinner ? "Congratulations! You won!" : "Sorry, you lost.";
  },
};

export default GameService;
