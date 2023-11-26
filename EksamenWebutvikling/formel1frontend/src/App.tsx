import Navbar from "./components/shared/Navbar";
import {
  HomePage,
  GamePage,
  OverviewPage,
  RegisterPage,
  AboutPage,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DriversProvider } from "./contexts/DriversContext";

//? 1:
//- TODO: Lage en mer responsiv løsning for HomePage, RegisterPage.
//- TODO: Sjekk hva som må gjøres som TODO på DriversList komponenten
// TODO: Lage et form for spill. Undersøk hva slags spill som skal lages.
// TODO: Fylle inn på AboutPage og gjøre responsiv
//-? TODO: Lage søke funksjon på OverviewPage (100%)
// TODO: Gjøre alle console.logs slik at de ikke ser GPT'et ut. (fjern denne linjen på 100%)
//-? TODO: Lage en mini-liste man kan bla gjennom på DriversDelete for å enkelt se hvem drivers som er registrert og hvilken ID de har.
//? TODO: Begynn å kode wwwroot. (10%) - sjekk rick and morty api
// TODO: Fiks custom cursors i tailwind.config.js og bruk på forskjellige steder. I spill f.eks. Legg til custom farger og diverse mer custom ting.

//? 2:
// TODO:
// TODO:

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <DriversProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="game" element={<GamePage />}></Route>
            <Route path="overview" element={<OverviewPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
          </Routes>
        </DriversProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
