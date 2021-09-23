import { useEffect, useState, Fragment } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loader from "../loader/loader";
import NavbarLayout from "../navigation/navbar.layout";
import { useLoader } from "../loader/loader.context";
import { deletePlaylist, getPlaylist } from "../utils/server.requests";
import { useLocalisation } from "../localisation/localisation.context";
import { lang } from "../localisation/localisation.data";
import { usePlaylist } from "./playlist.context";
import { useSnackbar } from "../snackbar/snackbar.context";
import { ReactComponent as DeleteIcon } from "../assets/icons/DeleteIcon.svg";

const PlaylistView = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState();
  const { playlistDispatch } = usePlaylist();
  const { snackbarDispatch } = useSnackbar();
  const { loader, setLoader } = useLoader();
  const { language } = useLocalisation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      getPlaylist(id, setPlaylist, setLoader);
    }, 0)
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
            <div><DeleteIcon className="pointer mt-m" title="Delete playlist" onClick={() => deletePlaylist(playlist?._id, playlistDispatch, snackbarDispatch, navigate)} /></div>
          </div>
          <div className="flex-c playlist-video mt-m">
            {playlist?.videos.map((video) => {
              return (
                <Fragment key={video._id}>
                  <Link to={`/watch/${video._id}`} className="playlist-videos">
                    <img
                      alt="thumbnail"
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    />
                    <h2 className="m-m">{video.title}</h2>
                  </Link>
                  <hr className="m-s" />
                </Fragment>
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
