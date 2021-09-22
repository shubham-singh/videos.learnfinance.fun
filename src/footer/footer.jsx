import { useLocalisation } from "../localisation/localisation.context";

import { ReactComponent as TwitterIcon } from "../assets/icons/TwitterIcon.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/GithubIcon.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/LinkedInIcon.svg";
import { scrollToTop } from "../utils/function";

const Footer = () => {
  const { language, setLanguage } = useLocalisation();

  return (
    <footer className="footer">
      <div>
        <span
          className={`small pointer m-m ${language === "hi" ? "bold" : "" }`}
          onClick={() => {
            setLanguage("hi");
            scrollToTop();
          }}
        >
          हिन्दी
        </span>
        <span
          className={`small pointer m-m ${language === "en" ? "bold" : ""}`}
          onClick={() => {
            setLanguage("en");
            scrollToTop();
          }}
        >
          English
        </span>
      </div>
      <div className="flex-row-center">
        <a
          href="https://twitter.com/i_shubhamsingh"
          target="blank"
          className="p-m"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-singh"
          target="blank"
          className="p-m"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/shubham-singh"
          target="blank"
          className="p-m"
        >
          <GithubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
