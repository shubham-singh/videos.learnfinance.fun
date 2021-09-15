import { Link } from "react-router-dom";
import NavbarLayout from "../navigation/navbar.layout";
import PlaylistCard from "./playlistCard";
import { usePlaylist } from "./playlist.context";
import { lang } from "../localisation/localisation.data";
import { useLocalisation } from "../localisation/localisation.context";

const PlaylistLayout = () => {
  const { playlist } = usePlaylist();
  const { language } = useLocalisation();

  if (playlist.length === 0) {
    return (
      <div className="content">
        <NavbarLayout />
        <div className="flex-c justify-c h-full-vp videos">
          <span className="x-large">{lang[language].emptyPlaylist}</span>
          <Link to="/">
            <button className="btn btn-classic shadow medium mt-m">
              {lang[language].seeVideos}
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="content">
        <NavbarLayout />
        <span className="top-grid x-large">{lang[language].playlist}</span>
        <div className="videos">
          {playlist.map((currentPlaylist) => {
            return (
              <PlaylistCard
                key={currentPlaylist._id}
                currentPlaylist={currentPlaylist}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default PlaylistLayout;
