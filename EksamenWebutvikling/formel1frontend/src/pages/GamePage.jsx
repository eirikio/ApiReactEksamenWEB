import { GameProvider } from "../contexts/GameContext";
import BettingGame from "../components/game/BettingGame";

const GamePage = () => {
  return (
    <GameProvider>
      <section>
        <header>
          <h1>Welcome to the F1 bettings office</h1>
          <h2>Place a bet on one of the drivers!</h2>
        </header>
        <main>
          <BettingGame />
        </main>
      </section>
    </GameProvider>
  );
};

export default GamePage;
