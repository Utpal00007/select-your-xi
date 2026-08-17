import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playerPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const players = use(playerPromise);

  return (
    <div className="w-11/12 mx-auto mt-8 grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2   gap-6 ">
      {players.map((player) => (
        <PlayerCard
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          key={player.id}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
