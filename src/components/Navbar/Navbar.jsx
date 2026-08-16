import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar-1.jpg";

const Navbar = ({ availableBalance }) => {
  return (
    <div>
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            {" "}
            <img className="w-15 h-15" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex space-x-2">
          <span>{availableBalance}</span>
          <span>Coin</span>
          <img src={dollarImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
