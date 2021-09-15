const VideoReducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};

export default VideoReducer;
