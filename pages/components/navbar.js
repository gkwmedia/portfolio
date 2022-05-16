import { useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-container">
          <div className="nav-left"></div>
          <div
            className={` ${
              showMobileNav ? "translate-x-0" : "translate-x-full"
            } nav-right`}
          >
            <div className="align-left"></div>
            <ul>
              <li>
                <a
                  className="nav-item"
                  href="#about-section"
                  onClick={() => setShowMobileNav(false)}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-item"
                  href="#project-section"
                  onClick={() => setShowMobileNav(false)}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-item"
                  href="#contact-section"
                  onClick={() => setShowMobileNav(false)}
                >
                  Contact
                </a>
              </li>
              <li>
                <button className="nav-btn">Resume</button>
              </li>
            </ul>
          </div>
          {showMobileNav ? (
            <AiOutlineClose
              className="hamburger-icon"
              size={30}
              onClick={() => setShowMobileNav(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="hamburger-icon"
              size={40}
              onClick={() => setShowMobileNav(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
