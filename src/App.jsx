import "./App.css";

import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import { Suspense } from "react";

const fetchPlayer = async () => {
  const res = await fetch("/player.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <AvailablePlayers
           
          playerPromise={playerPromise}
        ></AvailablePlayers>
      </Suspense>

      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
