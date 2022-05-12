import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-left"></div>
        <div className="nav-right">
          <ul>
            <li className="nav-item">About</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contact</li>
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
