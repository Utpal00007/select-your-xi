import { useState } from "react";
import groupImg from "../../assets/Group.jpg";
import reportImg from "../../assets/report-1.jpg";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price);
    if (availableBalance < playerPrice) return toast("Insufficient Balance");
    if (purchasedPlayers.length >= 6)
      return toast("You can't select more than 6 players");
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerData.price);
    setPurchasedPlayers([...purchasedPlayers, playerData]);
    toast("Player Selected Successfully");
  };

  return (
    <div key={player.id} className="shadow-sm rounded-xl p-6   space-y-6  ">
      <div>
        {" "}
        <img
          className="h-100 w-full object-cover  rounded-xl"
          src={player.playerImage}
          alt=""
        />
      </div>

      <div className="flex  gap-4">
        {" "}
        <img src={groupImg} alt="" />{" "}
        <p className="font-semibold text-lg"> {player.playerName}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3  px-4 py-2">
          {" "}
          <img src={reportImg} alt="" />
          <span>{player.country}</span>
        </div>
        <span className="bg-[#131313]/5  px-4 py-2 rounded-lg   text-base text-[#131313]">
          {player.role}
        </span>
      </div>

      <div className="border-b border-[#131313] opacity-10 my-5"></div>
      <div className="font-bold flex justify-between">
        {" "}
        <span>Rating </span>
        <span>{player.rating}</span>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">
          {player.role === "Bowler" ? "Bowling Style" : "Batting Style"}
        </p>
        <p className="text-[#131313]/70">
          {" "}
          {player.role === "Bowler" ? player.bowlingStyle : player.battingStyle}
        </p>
      </div>

      {player.role === "All-Rounder" && (
        <div className="flex justify-between">
          <p className="font-bold">Bowling Style </p>

          <p className="text-[#131313]/70"> {player.bowlingStyle}</p>
        </div>
      )}

      <div className="flex justify-between">
        <p className="font-bold">
          Price : $ <span>{player.price}</span>
        </p>

        <button
          disabled={isSelected === true}
          onClick={() => {
            handleSelected(player);
          }}
          className="border-2 border-[#131313]/10 rounded-xl  px-4 py-2 "
        >
          {isSelected === true ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
