import { Link } from "react-router-dom";
import { usePlaylist } from "./playlist.context";
import PlaylistCard from "./playlistCard";

const PlaylistLayout = () => {
  const { playlist, playlistKeys } = usePlaylist();

  if (playlistKeys.length === 0) {
    return (
      <div className="flex-c justify-c h-full-vp videos">
        <span className="x-large">
          you have no playlist.. wanna create one?
        </span>
        <Link to="/">
          <button className="btn btn-classic shadow medium mt-m">
            See videos
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <span className="top-grid x-large">Playlist</span>
        <div className="videos">
          {playlistKeys.map((playlistName) => {
            return (
              <PlaylistCard key={playlistName} playlistName={playlistName} />
            );
          })}
        </div>
      </>
    );
  }
};

export default PlaylistLayout;
