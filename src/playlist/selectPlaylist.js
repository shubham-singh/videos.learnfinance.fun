import { usePlaylist } from "./playlist.context";

const SelectPlaylist = ({ video, setPlaylistModal }) => {
  const { playlistKeys, playlistDispatch } = usePlaylist();

  return (
    <ul className="list">
      {playlistKeys.map((key) => {
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
      })}
    </ul>
  );
};

export default SelectPlaylist;
