import Navbar from "./components/shared/Navbar";
import { HomePage, GamePage, LearnPage, AboutPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="game" element={<GamePage />}></Route>
          <Route path="learn" element={<LearnPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
