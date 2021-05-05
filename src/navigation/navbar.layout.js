import Media from "react-media";
import NavbarDesktop from "./navbar.desktop";
import NavbarMobile from "./navbar.mobile";
const NavbarLayout = () => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 768px)",
          large: "(min-width: 769px)"
        }}
      >
        {(matches) => (
          <>
            {matches.small && <NavbarMobile />}
            {matches.large && <NavbarDesktop />}
          </>
        )}
      </Media>
    </>
  );
};

export default NavbarLayout;
