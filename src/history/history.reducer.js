const HistoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_HISTORY":
      return { ...state, history: action.payload.history };

    case "ADD_TO_HISTORY":
      if (state.history.some((video) => video._id === action.payload._id)) {
        return state;
      }
      return { ...state, history: [...state.history, action.payload] };

    case "CLEAR_HISTORY":
      return { ...state, history: [] };

    default:
      return state;
  }
};

export default HistoryReducer;
