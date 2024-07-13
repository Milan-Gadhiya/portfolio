import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerContainer">
          <div className="footerLogo">
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
            {/* <img src="./assets/images/gifs/logo2.png" alt="Logo" /> */}
          </div>
          <div className="footerNav">
            <p>
              <HashLink to="/#about">About me</HashLink>
            </p>
            <p>
              <HashLink to="/#services">services</HashLink>
            </p>
            {/* <p><a to="/#about">blogs</a></p> */}
            <p>
              <HashLink to="/#projects">Projects</HashLink>
            </p>
            <p>
              <HashLink to="/#contact">contact me</HashLink>
            </p>
          </div>
          <div className="footerMedias">
            <div className="footerMedia">
              <a
                href="https://www.linkedin.com/in/milan-gadhiya-16425b188/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="footerMedia">
              <a
                href="https://github.com/Milan-Gadhiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="footerMedia">
              <a
                href="https://www.facebook.com/milan.gadhiya.92351"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="footerMedia">
              <a
                href="https://www.instagram.com/milan_gadhiya1604/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <span>Copyright ©2024 All rights reserved </span>
        </div>
      </div>
    </footer>
  );
}
