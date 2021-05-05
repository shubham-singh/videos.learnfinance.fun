import { useState } from "react";
import { usePlaylist } from "./playlist.context";
import CreatePlaylist from "./createPlaylist";
import SelectPlaylist from "./selectPlaylist";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";
import { ReactComponent as PlaylistAdd } from "../assets/icons/PlaylistAdd.svg";

const AddToPlaylist = ({ video }) => {
  const { playlistKeys } = usePlaylist();
  const [showPlaylistModal, setPlaylistModal] = useState(null);
  console.log(playlistKeys === 0);
  function playlistModal() {
    setPlaylistModal("show");
  }

  return (
    <div>
      {/* <Playlist className="pointer ml-m mr-m" onClick={playlistModal} /> */}
      <PlaylistAdd className="pointer ml-m mr-m" onClick={playlistModal} />
      {showPlaylistModal && (
        <div className="playlist">
          <div
            className="modal-empty"
            onClick={() => setPlaylistModal(null)}
          ></div>
          <div className="playlist-modal flex-c justify-a">
            <div className="flex-row-center justify-b">
              <span className="large">Save to..</span>
              <CloseIcon
                className="pointer"
                onClick={() => setPlaylistModal(null)}
              />
            </div>

            <hr className="hr-half" />
            {playlistKeys.length ? (
              <SelectPlaylist
                video={video}
                setPlaylistModal={setPlaylistModal}
              />
            ) : (
              <p>No playlist</p>
            )}
            <CreatePlaylist video={video} setPlaylistModal={setPlaylistModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToPlaylist;
