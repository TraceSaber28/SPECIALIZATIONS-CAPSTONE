import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div id="imgContainer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Apex_legends_simple_logo.jpg" alt="Apex Logo" />
      </div>
      <div id="titleContainer">
        <h1 id="headerTitle">All About Apex</h1>
      </div>
      <div id="buttonContainer">
        <nav>
          <Link to="">
            <button className="headerBtns">Home</button>
          </Link>
          <Link to="/login-signup">
            <button className="headerBtns">Login/SignUp</button>
          </Link>
          <Link to="/legends">
            <button className="headerBtns">Legends</button>
          </Link>
          <Link to="/weapons">
            <button className="headerBtns">Weapons</button>
          </Link>
          <Link to="/Maps">
            <button className="headerBtns">Maps</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
