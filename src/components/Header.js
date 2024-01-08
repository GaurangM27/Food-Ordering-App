import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInInfo } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-slate-300 shadow-lg">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" alt="my logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex mx-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button
              className="btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("LogOut")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInInfo}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
