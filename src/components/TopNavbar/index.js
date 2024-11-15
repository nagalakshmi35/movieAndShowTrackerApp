import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import "./index.css";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <GiHamburgerMenu className="menu-bar" />
      <h1 className="main-heading">Cinemas</h1>
      <CgProfile className="profile-icon" />
    </div>
  );
};

export default TopNavbar;
