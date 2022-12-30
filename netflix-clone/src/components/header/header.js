import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/images/netflix-logo.png";
import "./header.css";

const Header = () => {
  const [scrollState, setScrollState] = useState(false);
  useEffect(() => {
    //change nav bar color on scroll
    let listener = document.addEventListener("scroll", (e) => {
      var scrollLength = document.scrollingElement.scrollTop;
      if (scrollLength >= 150) {
        if (!scrollState) setScrollState(true);
      } else {
        if (scrollState) setScrollState(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const buttonStyle = { borderRadius: "2rem", textTransform: "lowercase" };
  const navbarStyle = {
    backgroundColor: !scrollState ? "transparent" : "#005fff80",
    justifyContent: "center",
  };

  return (
    <Navbar
      className="navbar-transparent navbar navbar-expand-lg"
      style={navbarStyle}
      fixed="top"
    >
      <Navbar.Brand href="/Home/">
        <div className="header-container">
          <img src={logo} className="header-logo" alt="logo" />
          <a>Home</a>
          <a>TV Shows</a>
          <a>Movies</a>
          <a>New & Popular</a>
          <a>My List</a>
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
