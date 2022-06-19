import { useState, useEffect } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const controlNav = () => {
  //   if (typeof window !== "undefined") {
  //     if (window.scrollY > lastScrollY) {
  //       setShowNav(false);
  //     } else {
  //       setShowNav(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", controlNav);
  //     console.log(lastScrollY);

  //     return () => {
  //       window.removeEventListener("scroll", controlNav);
  //     };
  //   }
  // }, [lastScrollY]);

  return (
    <nav>
      <div className='navbar'>
        <div className='navbar-container'>
          <div className='nav-left'>
            <Link className='nav-icon-link' href='/'>
              <h1> TG </h1>
            </Link>
          </div>
          <div
            className={`nav-right ${
              showMobileNav ? "translate-x-0" : "translate-x-full"
            }`}>
            <div className='align-left'> </div>
            <ul>
              <li>
                <a
                  className='nav-item'
                  href='#about-section'
                  onClick={() => setShowMobileNav(false)}>
                  About
                </a>
              </li>
              <li>
                <a
                  className='nav-item'
                  href='#technologies-section'
                  onClick={() => setShowMobileNav(false)}>
                  Technologies
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-item'
                  href='#project-section'
                  onClick={() => setShowMobileNav(false)}>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-item'
                  href='#contact-section'
                  onClick={() => setShowMobileNav(false)}>
                  Contact
                </a>
              </li>
              <li>
                <button className='nav-btn'>
                  <a href='/assets/resume.pdf' target={"_blank"}>
                    Resume
                  </a>
                </button>
              </li>
            </ul>
          </div>
          {showMobileNav ? (
            <AiOutlineClose
              className='hamburger-icon'
              size={30}
              onClick={() => setShowMobileNav(false)}
            />
          ) : (
            <GiHamburgerMenu
              className='hamburger-icon'
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
