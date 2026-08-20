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
        <div className="flex space-x-2 items-center">
          <div className="">
            <ul className="flex text-[#131313]/70">
              <li>
                <a className="btn btn-ghost ">Home</a>
              </li>
              <li>
                <a className="btn btn-ghost">Fixture</a>
              </li>
              <li>
                <a className="btn btn-ghost">Teams</a>
              </li>
              <li>
                <a className="btn btn-ghost">Schedules</a>
              </li>
            </ul>
          </div>
          <span>{availableBalance}</span>
          <span>Coin</span>
          <img src={dollarImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
