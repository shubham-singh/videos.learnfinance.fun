import { useState } from "react";
import { useLocalisation } from "../localisation/localisation.context";
import { useSnackbar } from "../snackbar/snackbar.context";
import { createPlaylist } from "../utils/server.requests";
import { usePlaylist } from "./playlist.context";
import { lang } from "../localisation/localisation.data";

const CreatePlaylist = ({ video, setPlaylistModal }) => {
  const [playlistName, setPlaylistName] = useState("");
  const { playlistDispatch, playlistKeys } = usePlaylist();
  const { snackbarDispatch } = useSnackbar();
  const { language } = useLocalisation();

  const createPlaylistHandle = () => {
    if (playlistKeys.includes(playlistName)) {
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Playlist with the name already exists."
      });
    } else {
      createPlaylist(video, playlistName, playlistDispatch, snackbarDispatch);
      setPlaylistName("");
      setPlaylistModal(null);
    }
  };

  return (
    <>
      <hr className="hr-half" />
      <input
        className="input-playlist medium block"
        type="text"
        placeholder={lang[language].enterPlaylistName}
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <button
        className="btn btn-classic shadow inline"
        onClick={createPlaylistHandle}
      >
        {lang[language].createAndSave}
      </button>
    </>
  );
};

export default CreatePlaylist;
