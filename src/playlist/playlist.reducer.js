const PlaylistReducer = (state, action) => {
  const id = action.payload?.id;
  const playlistName = action.payload?.playlistName;
  const video = action.payload?.video;
  switch (action.type) {
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.payload.playlists
      };

    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((currentPlaylist) => {
          if (currentPlaylist.playlist_name === playlistName) {
            return {
              ...currentPlaylist,
              videos: [...currentPlaylist.videos, video]
            };
          } else {
            return currentPlaylist;
          }
        })
      };

    case "CREATE_AND_ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: [...state.playlist, { _id: id, playlist_name: playlistName, videos: [video] }]
      };

    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter(playlist => playlist._id !== id)
      }

    case "RESET":
      return {
        ...state,
        playlist: []
      };

    default:
      return state;
  }
};

export default PlaylistReducer;
