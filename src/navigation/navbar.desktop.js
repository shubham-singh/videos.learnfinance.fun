import { NavLink, Link } from "react-router-dom";

const NavbarDesktop = () => {
  return (
    <nav className="sidebar flex-c large">
      <Link to="/">
        <h1 className="heading x-large p-xs mb-l mt-l">Learn Finance</h1>
      </Link>

      <NavLink activeClassName="selected" className="nav-link" end to="/">
        Home
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" to="/playlist">
        Playlist
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" to="/liked">
        Liked videos
      </NavLink>
    </nav>
  );
};

export default NavbarDesktop;
