import { createContext, useContext, useEffect, useReducer } from "react";
import RatingReducer from "./rating.reducer";
import { useAuth } from "../auth/auth.context";
import { useSnackbar } from "../snackbar/snackbar.context";
import { setupAuthHeaderForServiceCalls } from "../utils/function";
import {
  getRating,
  getAllPlaylist,
  getHistory,
  getUser
} from "../utils/server.requests";
import { usePlaylist } from "../playlist/playlist.context";
import { useHistory } from "../history/history.context";

const RatingContext = createContext();

export const RatingContextProvider = (props) => {
  const [rating, dispatch] = useReducer(RatingReducer, {
    likes: [],
    dislikes: []
  });

  const { user, authDispatch } = useAuth();
  const { playlistDispatch } = usePlaylist();
  const { historyDispatch } = useHistory();
  const { snackbarDispatch } = useSnackbar();

  useEffect(() => {
    if (user.loggedIn) {
      setupAuthHeaderForServiceCalls();
      getUser(authDispatch, snackbarDispatch);
      getAllPlaylist(playlistDispatch, snackbarDispatch);
      getRating(dispatch, snackbarDispatch);
      getHistory(historyDispatch, snackbarDispatch);
    } else {
      dispatch({ type: "RESET" });
      playlistDispatch({ type: "RESET" });
      historyDispatch({ type: "CLEAR_HISTORY" });
    }
  }, [user.loggedIn, historyDispatch, playlistDispatch, snackbarDispatch]);

  return (
    <RatingContext.Provider
      value={{
        likedVideos: rating.likes,
        dislikedVideos: rating.dislikes,
        ratingDispatch: dispatch
      }}
    >
      {props.children}
    </RatingContext.Provider>
  );
};

export const useRating = () => useContext(RatingContext);
