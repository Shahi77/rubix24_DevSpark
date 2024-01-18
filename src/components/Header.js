import { Link } from "react-router-dom";
import { gradientBackgroundStyle } from "../utils/constants";

const Header = () => {
  return (
    <nav
      className="flex justify-between p-3 shadow-md"
      style={gradientBackgroundStyle}
    >
      <img src="./logo.png" alt="logo" className="w-11" />
      <h1 className="m-auto font-bold text-lg">OTT Dashboard</h1>
      <div>
        <ul>
          <Link to={"/dashboard"}>
            <li className="font-semibold border-0 shadow-xl rounded-md px-2 py-1 text-black bg-white m-auto cursor-pointer hover:bg-[#0066ff] hover:text-white hover:shadow-2xl transition-all duration-300 ease-in-out">
              Get Started
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
