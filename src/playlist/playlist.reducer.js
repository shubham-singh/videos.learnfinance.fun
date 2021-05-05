const PlaylistReducer = (state, action) => {
  const playlistName = action.payload.playlistName;
  const video = action.payload.video;
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: {
          ...state.playlist,
          [playlistName]: [...state.playlist[playlistName], video]
        }
      };

    case "CREATE_AND_ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: { ...state.playlist, [playlistName]: [video] }
      };

    default:
      return state;
  }
};

export default PlaylistReducer;
