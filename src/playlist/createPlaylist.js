import { useState } from "react";
import { usePlaylist } from "./playlist.context";

const CreatePlaylist = ({ video, setPlaylistModal }) => {
  const [playlistName, setPlaylistName] = useState("");
  const { playlistDispatch } = usePlaylist();

  return (
    <>
      <hr className="hr-half" />
      <input
        className="input-playlist medium block"
        type="text"
        placeholder="Enter playlist name.."
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <button
        className="btn btn-classic shadow inline"
        onClick={() => {
          playlistDispatch({
            type: "CREATE_AND_ADD_TO_PLAYLIST",
            payload: { playlistName, video }
          });
          setPlaylistName("");
          setPlaylistModal(null);
        }}
      >
        Create and save
      </button>
    </>
  );
};

export default CreatePlaylist;
