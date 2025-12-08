import { IoMoon } from "react-icons/io5";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Where in the world?</h1>
        </div>
        <div className="btns">
          <div className="btn1">
            <IoMoon />
          </div>
          <div className="btn">Dark Mode</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
