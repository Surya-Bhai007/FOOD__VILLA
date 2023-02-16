// export const Title = () => (
  
 const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://scontent.fdel46-1.fna.fbcdn.net/v/t1.6435-9/80958074_168682201162684_5502171105554595840_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jE3mTAN6eBsAX9rGD-N&_nc_ht=scontent.fdel46-1.fna&oh=00_AfCFUP2j6M-FvVuL5raMvtujl8ZLn0kNuifDsQ5xoICK1g&oe=6412A315"
      alt="logo"
      typeof="png"
    />
  </a>
);


const Header = () => [
    <div className="header ">
      <Title />
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
          <li>CART</li>
        </ul>
      </div>
    </div>,
  ];

/**       Two ways of exporting
 1.export default Title;
 * we can export one thing using default 
 2. exporting by name for example
 -------------------------------------------------
  export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://scontent.fdel46-1.fna.fbcdn.net/v/t1.6435-9/80958074_168682201162684_5502171105554595840_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jE3mTAN6eBsAX9rGD-N&_nc_ht=scontent.fdel46-1.fna&oh=00_AfCFUP2j6M-FvVuL5raMvtujl8ZLn0kNuifDsQ5xoICK1g&oe=6412A315"
      alt="logo"
      typeof="png"
    />
  </a>
);

in app.js 
code: import {Title} from "./components/Header";
--------------------------------------------------------
 */

export default Header;