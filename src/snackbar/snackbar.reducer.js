const SnackbarReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_SNACKBAR":
      return {
        visible: true,
        message: action.payload
      };
    case "DELETE_SNACKBAR":
      return {
        visible: false,
        message: ""
      };
    default:
      return state;
  }
};

export default SnackbarReducer;
