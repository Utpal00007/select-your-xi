import "./App.css";

import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import { Suspense, useState } from "react";

const fetchPlayer = async () => {
  const res = await fetch("/player.json");
  return res.json();
};

const playerPromise = fetchPlayer();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(40000000);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="w-11/12 mx-auto mt-8     flex justify-between item-center">
        <h2 className="text-2xl font-bold">Available Players</h2>
        <div className="">
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={`py-3 px-6 border-2 border-[#131313]/10  rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available{" "}
          </button>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className={`py-3 px-6 border-2 border-[#131313]/10 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playerPromise={playerPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
