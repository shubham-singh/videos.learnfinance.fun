import { useSnackbar } from "../snackbar/snackbar.context";
import { addToPlaylist } from "../utils/server.requests";
import { usePlaylist } from "./playlist.context";

const SelectPlaylist = ({ video, setPlaylistModal }) => {
  const { playlist, playlistKeys, playlistDispatch } = usePlaylist();
  const { snackbarDispatch } = useSnackbar();

  const addToPlaylistHandle = (item) => {
    if (item.videos.find((currentVideo) => currentVideo._id === video._id)) {
      return snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Video already in playlist"
      });
    }
    addToPlaylist(video, item, playlistDispatch, snackbarDispatch);
    setPlaylistModal(null);
  };

  return (
    <ul className="list">
      {playlist.map((item) => {
        return (
          <li
            key={item._id}
            className="pointer large"
            onClick={() => addToPlaylistHandle(item)}
          >
            {item.playlist_name}
          </li>
        );
      })}
      {/* {playlistKeys.map((key) => {
        return (
          <li
            key={key}
            className="pointer large"
            onClick={() => {
              playlistDispatch({
                type: "ADD_TO_PLAYLIST",
                payload: {
                  playlistName: key,
                  video
                }
              });
              setPlaylistModal(null);
            }}
          >
            {key}
          </li>
        );
      })} */}
    </ul>
  );
};

export default SelectPlaylist;
