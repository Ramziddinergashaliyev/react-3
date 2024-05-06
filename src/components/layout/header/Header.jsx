import React from "react";
import "./header.scss";
import { Navbar } from "../../../static/productsData";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function Header() {
  const navbarItem = Navbar.map((nav) => {
    return (
      <li key={nav.id} className="navbar__list">
        <a className="navbar__list__link" href="">
          {nav.title}
        </a>
      </li>
    );
  });

  return (
    <nav className="navbar container">
      <div className="navbar__left">
        <h3>Samsung</h3>
        <ul className="navbar__item__top">{navbarItem}</ul>
      </div>
      <div className="navbar__right">
        <ul className="navbar__item">
          <li className="navbar__list">
            <a className="navbar__list__link" href="">
              Explore
            </a>
          </li>
          <li className="navbar__list">
            <a className="navbar__list__link" href="">
              Support
            </a>
          </li>
          <li className="navbar__list">
            <a className="navbar__list__link" href="">
              For Business
            </a>
          </li>
        </ul>
        <div className="navbar__icon">
          <IoSearch />
          <MdOutlineShoppingCart />
          <FaRegUser />
        </div>
      </div>
    </nav>
  );
}

export default Header;
