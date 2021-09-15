import { useState } from "react";
import { usePlaylist } from "./playlist.context";
import CreatePlaylist from "./createPlaylist";
import SelectPlaylist from "./selectPlaylist";
import { useLocalisation } from "../localisation/localisation.context";
import { lang } from "../localisation/localisation.data";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";
import { ReactComponent as PlaylistAdd } from "../assets/icons/PlaylistAdd.svg";
import { useAuth } from "../auth/auth.context";
import { useNavigate } from "react-router-dom";

const AddToPlaylist = ({ video }) => {
  const { playlistKeys } = usePlaylist();
  const { language } = useLocalisation();
  const { user } = useAuth();
  const [showPlaylistModal, setPlaylistModal] = useState(null);
  const navigate = useNavigate();

  const addPlaylistHandler = () => {
    if (user.loggedIn) {
      return setPlaylistModal("show");
    } else {
      return navigate("/login", { state: { from: `/watch/${video._id}` } });
    }
  };

  return (
    <div>
      <PlaylistAdd className="pointer ml-m mr-m" onClick={addPlaylistHandler} />
      {showPlaylistModal && (
        <div className="playlist">
          <div
            className="modal-empty"
            onClick={() => setPlaylistModal(null)}
          ></div>
          <div className="playlist-modal flex-c justify-a">
            <div className="flex-row-center justify-b">
              <span className="large">{lang[language].saveTo}</span>
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
              <p>{lang[language].noPlaylist}</p>
            )}
            <CreatePlaylist video={video} setPlaylistModal={setPlaylistModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToPlaylist;
