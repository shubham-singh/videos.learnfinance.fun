import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth.context";

import { ReactComponent as HomeIcon } from "../assets/icons/HomeIcon.svg";
import { ReactComponent as PlaylistPlay } from "../assets/icons/PlaylistPlay.svg";
import { ReactComponent as ThumbsUpOutlined } from "../assets/icons/ThumbsUpOutlined.svg";
import { ReactComponent as HistoryIcon } from "../assets/icons/HistoryIcon.svg";
import { ReactComponent as LoginIcon } from "../assets/icons/LoginIcon.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/LogoutIcon.svg";
import { useSnackbar } from "../snackbar/snackbar.context";

const NavbarMobile = () => {
  const { user, authDispatch } = useAuth();
  const { snackbarDispatch } = useSnackbar();
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    authDispatch({ type: "LOGOUT" });
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Successfully Logged out"
    });
  };

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
      <NavLink activeClassName="selected" to="/history">
        <HistoryIcon />
      </NavLink>
      {user.loggedIn ? (
        <a href="/">
          <LogoutIcon onClick={logoutHandler} />
        </a>
      ) : (
        <NavLink activeClassName="selected" to="/login">
          <LoginIcon />
        </NavLink>
      )}
    </nav>
  );
};

export default NavbarMobile;
