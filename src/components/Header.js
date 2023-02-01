import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <span id="shoppingHeader">Shopping Cart</span>
        <Link to={"/"}>
          <span id="homeHeader">
            <button>Home Page &nbsp;</button>
          </span>
        </Link>

        <Link to={"/CartPage"}>
          <span id="cartHeader">
            <button>&nbsp; Cart Page</button>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Header;
