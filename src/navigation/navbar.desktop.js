import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/auth.context";
import Footer from "../footer/footer";
import { useHistory } from "../history/history.context";
import { useLocalisation } from "../localisation/localisation.context";
import { lang } from "../localisation/localisation.data";
import { useSnackbar } from "../snackbar/snackbar.context";
import { clearHistory } from "../utils/server.requests";

const NavbarDesktop = () => {
  const { language } = useLocalisation();
  const { user, authDispatch } = useAuth();
  const { snackbarDispatch } = useSnackbar();
  const { historyDispatch } = useHistory();
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT" });
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Successfully Logged out"
    });
    navigate("/");
  };

  return (
    <nav className="sidebar flex-c large">
      <Link to="/">
        <h1 className="heading x-large p-xs mb-l mt-l">
          {lang[language].learnFinance}
        </h1>
      </Link>

      {user.loggedIn ? (
        <span>
          {lang[language].greeting}
          {user.firstName}
        </span>
      ) : null}
      <br />
      <br />
      <NavLink activeClassName="selected" className="nav-link" end to="/">
        {lang[language].home}
      </NavLink>
      <NavLink
        activeClassName="selected"
        className="nav-link"
        to={{ pathname: "/playlist", state: { from: "/playlist" } }}
      >
        {lang[language].playlist}
      </NavLink>
      <NavLink
        activeClassName="selected"
        className="nav-link"
        to={{ pathname: "/liked", state: { from: "/liked" } }}
      >
        {lang[language].likedVideos}
      </NavLink>
      <NavLink
        activeClassName="selected"
        className="nav-link"
        to={{ pathname: "/history", state: { from: "/history" } }}
      >
        {lang[language].history}
      </NavLink>
      <br />
      {location.pathname === "/history" ? (
        <button
          className="btn btn-classic shadow"
          onClick={() => clearHistory(historyDispatch, snackbarDispatch)}
        >
          {lang[language].clearHistory}
        </button>
      ) : null}
      {user.loggedIn ? (
        <button className="btn btn-classic shadow" onClick={logoutHandler}>
          {lang[language].logout}
        </button>
      ) : (
        <button className="btn btn-classic shadow" onClick={loginHandler}>
          {lang[language].login}
        </button>
      )}
      <br />
      <br />
      <Footer />
    </nav>
  );
};

export default NavbarDesktop;
