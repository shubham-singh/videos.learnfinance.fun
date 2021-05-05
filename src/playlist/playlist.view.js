import { Link, useParams } from "react-router-dom";
import VideoCard from "../video/videoCard";
import { usePlaylist } from "./playlist.context";

const PlaylistView = () => {
  const { id } = useParams();
  const { playlist, playlistKeys } = usePlaylist();

  return (
    <div className="playlist-page">
      <div className="playlist-info">
        <h2 className="m-m">{playlistKeys[id]}</h2>
        <span className="large">
          {playlist[playlistKeys[id]].length} videos
        </span>
      </div>
      <div className="flex-c playlist-video mt-m">
        {playlist[playlistKeys[id]].map((video) => {
          return (
            <>
              <Link to={`/watch/${video._id}`} className="flex-r">
                <img
                  alt="thumbnail"
                  src={`https://i.ytimg.com/vi/${video.youtubeId}/mqdefault.jpg`}
                />
                <h2 className="m-m">video.title</h2>
              </Link>
              <hr className="m-s" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PlaylistView;
