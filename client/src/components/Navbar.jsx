import React, {  useContext, useEffect, useState } from "react";
import logo from "/home/logo10 (1).png";
import { FaRegUser } from "react-icons/fa";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import BurgerMenu from '../svgs/BurgerMenu.svg?react'
import Cart from '../svgs/Cart.svg?react'
import Search from '../svgs/Search.svg?react'
import { CartContext } from "../contexts/CartProvider";



function Navbar() {
  // Handle scroll functions
  const [isSticky, setSticky] = useState(false);
     const { cart } = useContext(CartContext);

  // const [cart, refetch] = useCart();
  const isAuthenticated = true;
  const user = {
    photoURL:"https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720051200&semt=ais_user"
  }


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) setSticky(true);
      else setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 3</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/offers">Offers</Link>
      </li>
    </>
  );

  return (
    <header className="max-w-screen-2xl mx-auto container fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-30">
      <div
        className={`navbar  ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <a href="/" className="hidden md:block">
            <img src={logo} alt="logo" />
          </a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <BurgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* search */}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <Search />
          </button>

          {/* cartItems */}
          <Link to={isAuthenticated ? "/cart" : "/signup"}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-3 items-center justify-center hidden lg:flex"
            >
              <div className="indicator">
                <Cart />
                {isAuthenticated ? (
                  <span className="badge badge-sm indicator-item">
                    {cart.length}
                    
                  </span>
                ) : (
                  <span className="badge badge-sm indicator-item">0</span>
                )}
              </div>
            </div>
          </Link>

          {/* button */}
          {isAuthenticated ? (
            <Profile user={user} />
          ) : (
            <button
              className="btn bg-green rounded-full text-white flex items-center px-6 gap-2"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              <FaRegUser />
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
