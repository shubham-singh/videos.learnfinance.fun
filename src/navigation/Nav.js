import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/playlist">Playlist</Link>
      <Link to="/liked">Like</Link>
    </nav>
  );
};

export default Nav;
