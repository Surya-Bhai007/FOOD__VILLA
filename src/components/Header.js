import { useState } from "react";
import { IMG_LOGO_URL } from "../assets/constants";
import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img className="logo" src={IMG_LOGO_URL} alt="logo" typeof="png" />
  </a>
);
// const loggedInUser = () => {
//   return false;
// };

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header ">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>CART</li>
        </ul>
      </div>

      {
        // JS expressions only
        //(a=10,console.log(a))
        isLoggedIn ? (
          <button className="login-btn" onClick={() => setIsLoggedIn(false)}>
            sign out
          </button>
        ) : (
          <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
            {" "}
            sign in{" "}
          </button>
        )
      }
    </div>
  );
};

export default Header;
