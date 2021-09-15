import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../loader/loader";
import NavbarLayout from "../navigation/navbar.layout";
import { useLoader } from "../loader/loader.context";
import { getPlaylist } from "../utils/server.requests";
import { useLocalisation } from "../localisation/localisation.context";
import { lang } from "../localisation/localisation.data";
import VideoCard from "../video/videoCard";

const PlaylistView = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState();
  const { loader, setLoader } = useLoader();
  const { language } = useLocalisation();

  useEffect(() => {
    getPlaylist(id, setPlaylist, setLoader);
  }, []);

  const showPlaylist = () => {
    if (loader === "show") {
      return <Loader />;
    } else if (loader === "error") {
      return <p>{lang[language].playlistError}</p>;
    } else {
      return (
        <div className="playlist-page">
          <div className="playlist-info">
            <h2 className="m-m">{playlist?.playlist_name}</h2>
            <span className="large">
              {playlist?.videos.length} {lang[language].videos}
            </span>
          </div>
          <div className="flex-c playlist-video mt-m">
            {playlist?.videos.map((video) => {
              return (
                <>
                  <Link to={`/watch/${video._id}`} className="playlist-videos">
                    <img
                      alt="thumbnail"
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    />
                    <h2 className="m-m">{video.title}</h2>
                  </Link>
                  <hr className="m-s" />
                </>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="content">
      <NavbarLayout />
      {showPlaylist()}
    </div>
  );
};

export default PlaylistView;
