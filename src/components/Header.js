import React from "react";

import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <img
          src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
          className="header__logo"
          alt=""
        />
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <nav className="header__nav">
          <div className="header__nav-option">
            <span className="header__nav-option_line1">Hello Guest</span>
            <span className="header__nav-option_line2">Sign In</span>
          </div>
          <div className="header__nav-option">
            <span className="header__nav-option_line1">Returns</span>
            <span className="header__nav-option_line2">& Orders</span>
          </div>
          <div className="header__nav-option">
            <span className="header__nav-option_line1">Your</span>
            <span className="header__nav-option_line2">Prime</span>
          </div>
          <div className="header__nav-basket">
            <ShoppingBasketIcon />
            <span className="header__nav-option_line2 shopping__counter">
              0
            </span>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
