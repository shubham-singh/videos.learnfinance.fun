const LikeReducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return { ...state, videos: [...state.videos, action.payload] };
    case "UNLIKE":
      return {
        ...state,
        videos: state.videos.filter((video) => video._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export default LikeReducer;
