import { ReactComponent as HomeIcon } from "../assets/icons/HomeIcon.svg";
import { ReactComponent as PlaylistPlay } from "../assets/icons/PlaylistPlay.svg";
import { ReactComponent as ThumbsUpOutlined } from "../assets/icons/ThumbsUpOutlined.svg";
import { NavLink } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <nav className="bottom-navigation">
      <NavLink activeClassName="selected" end to="/">
        <HomeIcon />
      </NavLink>
      <NavLink activeClassName="selected" to="/playlist">
        <PlaylistPlay />
      </NavLink>
      <NavLink activeClassName="selected" to="/liked">
        <ThumbsUpOutlined style={{ color: "white" }} />
      </NavLink>
    </nav>
  );
};

export default NavbarMobile;
