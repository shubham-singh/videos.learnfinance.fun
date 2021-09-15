import { Link } from "react-router-dom";
import { ReactComponent as PlaylistPlayWhite } from "../assets/icons/PlaylistPlayWhite.svg";

const PlaylistCard = ({ currentPlaylist }) => {
  return (
    <div className="m-s">
      <Link to={`/playlist/${currentPlaylist._id}`}>
        <div className="relative">
          <img
            alt="thumbnail"
            className="block"
            src={`https://i.ytimg.com/vi/${currentPlaylist.videos[0].youtubeId}/mqdefault.jpg`}
          />
          <div className="playlist-overlap">
            <h2>{currentPlaylist.videos.length}</h2>
            <PlaylistPlayWhite />
          </div>
        </div>
        <h4 className="m-s">{currentPlaylist.playlist_name}</h4>
      </Link>
    </div>
  );
};

export default PlaylistCard;
