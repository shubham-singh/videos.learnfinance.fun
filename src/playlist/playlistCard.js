import { Link } from "react-router-dom";
import { usePlaylist } from "./playlist.context";
import { ReactComponent as PlaylistPlayWhite } from "../assets/icons/PlaylistPlayWhite.svg";

const PlaylistCard = ({ playlistName }) => {
  const { playlist, playlistKeys } = usePlaylist();
  return (
    <div className="m-s">
      <Link to={`/playlist/${playlistKeys.indexOf(playlistName)}`}>
        <div className="relative">
          <img
            alt="thumbnail"
            className="block"
            src={`https://i.ytimg.com/vi/${playlist[playlistName][0].youtubeId}/mqdefault.jpg`}
          />
          <div className="playlist-overlap">
            <h2>{playlist[playlistName].length}</h2>
            <PlaylistPlayWhite />
          </div>
        </div>
        <h4 className="m-s">{playlistName}</h4>
      </Link>
    </div>
  );
};

export default PlaylistCard;
