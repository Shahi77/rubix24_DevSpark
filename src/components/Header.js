import { Link } from "react-router-dom";
import { gradientBackgroundStyle } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <nav
      className="flex justify-between p-3 shadow-md"
      style={gradientBackgroundStyle}
    >
      <div>
        <img src="./logo.png" alt="logo" className="w-11" />
      </div>
      <div className="m-auto">
        <h1 className="font-bold text-lg w-36 text-center">OTT Dashboard</h1>
      </div>
      <div>
        <ul>
          <Link to={isLogin === false ? "/dashboard" : "/"}>
            <button
              className="w-20 mt-1 text-center font-semibold border-0 shadow-xl rounded-md px-2 py-1 text-black bg-white hover:bg-[#0066ff] hover:text-white hover:shadow-2xl transition-all duration-300 ease-in-out"
              onClick={handleLoginClick}
            >
              {isLogin === false ? "Login" : "Logout"}
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
