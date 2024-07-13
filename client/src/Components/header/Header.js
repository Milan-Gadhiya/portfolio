import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header(props) {
  return (
    <header className={`header-${props.bgColor || "white"}`}>
      <div className="container">
        <div className="nav">
          <div className="nav1">
            <Link to="/">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="15" fill="white" />
                <path
                  d="M25 75V25L50 50L75 25V75H65V45L50 60L35 45V75H25Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
          <div className="nav2">
            <div className="menu">
              <HashLink to="/#about">about Me</HashLink>
            </div>
            <div className="menu">
              <HashLink to="/#services">services</HashLink>
            </div>
            {/* <div className="menu">
              <a href="#">Blogs</a>
            </div> */}
            <div className="menu">
              <HashLink to="/#projects">Projects</HashLink>
            </div>
            <div className="menu">
              <HashLink to="/#contact">contact Me</HashLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
