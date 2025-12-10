import { IoMoon } from "react-icons/io5";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = ({ darkMode, setdarkMode }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Where in the world?</h1>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
        <div
          className="btns"
          onClick={() => {
            setdarkMode(!darkMode);
          }}
        >
          <div className="btn1">
            <IoMoon />
          </div>
          <div className="btn">
            <h4>Dark Mode</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
