import { createContext, useContext, useReducer } from "react";
import PlaylistReducer from "./playlist.reducer.js";

const PlaylistContext = createContext();

export const PlaylistContextProvider = (props) => {
  const [playlist, dispatch] = useReducer(PlaylistReducer, {
    playlist: {},
    playlistKeys: function () {
      return Object.keys(this.playlist);
    }
  });

  return (
    <PlaylistContext.Provider
      value={{
        playlist: playlist.playlist,
        playlistKeys: playlist.playlistKeys(),
        playlistDispatch: dispatch
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
