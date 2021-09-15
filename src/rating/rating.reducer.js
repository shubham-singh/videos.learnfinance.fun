const RatingReducer = (state, action) => {
  switch (action.type) {
    case "SET_RATING":
      return {
        ...state,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes
      };

    case "LIKE":
      return { ...state, likes: [...state.likes, action.payload] };

    case "UNLIKE":
      return {
        ...state,
        likes: state.likes.filter((video) => video._id !== action.payload._id)
      };

    case "DISLIKE":
      return { ...state, dislikes: [...state.dislikes, action.payload] };

    case "UNDISLIKE":
      return {
        ...state,
        dislikes: state.dislikes.filter(
          (video) => video._id !== action.payload._id
        )
      };

    case "RESET":
      return {
        ...state,
        likes: [],
        dislikes: []
      };

    default:
      return state;
  }
};

export default RatingReducer;
