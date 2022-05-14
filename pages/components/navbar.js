import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-left"></div>
        <div className="nav-right">
          <ul>
            <li>
              <a className="nav-item" href="#about-section">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item" href="#project-section">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item" href="#contact-section">
                Contact
              </a>
            </li>
            <li>
              <button className="nav-btn">Resume</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
