const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);
  const { playerImage, playerName, battingStyle, bowlingStyle } = player;

  const handleRemovePlayer = () => {
    removePlayer(player);
  };

  return (
    <div className="border-2 border-[#131313]/10 rounded-2xl flex justify-between items-center p-6 mt-8">
      <div className=" flex gap-6 items-center">
        <img className="w-20 h-20 rounded-2xl" src={playerImage} alt="" />
        <div className="">
          <h2 className="font-semibold text-2xl"> {playerName} </h2>
          <div className="flex  gap-2">
            <p className="font-bold">
              {player.role === "Bowler" ? "Bowling Style:" : "Batting Style:"}
            </p>
            <p className="text-[#131313]/70">
              {" "}
              {player.role === "Bowler" ? bowlingStyle : battingStyle}
            </p>
          </div>
        </div>
      </div>
      <div onClick={handleRemovePlayer} className="">
        <img src="https://i.ibb.co.com/DDZMMPFf/Frame.jpg" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
