import axios from "axios";
import {
  GET_USER,
  GET_ALL_VIDEOS,
  GET_VIDEO,
  LOGIN,
  SIGNUP,
  INCREMENT_VIEW_COUNT,
  LIKE_VIDEO,
  UNLIKE_VIDEO,
  GET_RATING,
  GET_PLAYLIST,
  DISLIKE_VIDEO,
  UNDISLIKE_VIDEO,
  ADD_TO_PLAYLIST,
  CREATE_PLAYLIST,
  GET_HISTORY,
  CLEAR_HISTORY,
  ADD_TO_HISTORY,
  DELETE_PLAYLIST
} from "./api.routes";
import { deleteAuthToken } from "./function";

export const login = async (loginInfo, authDispatch, snackbarDispatch) => {
  try {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Logging In"
    });
    const response = await axios.post(LOGIN, loginInfo);

    if (response.data.success) {
      authDispatch({
        type: "LOGIN",
        payload: {
          firstName: response.data.user.firstName,
          token: response.data.token
        }
      });
    }
    if (response.status === 400) {
      throw new Error("Login Failed");
    }
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Successfully Logged In"
    });
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.response.data.error
    });
  }
};

export const logout = (authDispatch) => {
  authDispatch({
    type: "LOGOUT"
  });
};

export const signup = async (signupInfo, authDispatch, snackbarDispatch) => {
  try {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Creating your account"
    });
    const response = await axios.post(SIGNUP, signupInfo);
    if (response.data.success) {
      authDispatch({
        type: "LOGIN",
        payload: {
          firstName: response.data.user.firstName,
          token: response.data.token
        }
      });
    }
    if (response.status === 400) {
      throw new Error("Signup Failed");
    }
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Successfully Signed Up"
    });
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.response.data.error
    });
  }
};

export const getUser = async (authDispatch, snackbarDispatch) => {
  try {
    const response = await axios.get(GET_USER);
    authDispatch({
      type: "USER_INFO",
      payload: { firstName: response.data.user.firstName }
    });
  } catch (error) {
    if (error.response.data.error === "jwt expired") {
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Please Login again"
      });
      deleteAuthToken()
    }
  }
};

export const getAllVideos = async (videoDispatch, setLoader) => {
  setLoader("show");
  try {
    const response = await axios.get(GET_ALL_VIDEOS);
    videoDispatch({ type: "SET_VIDEOS", payload: response.data.videos });
    setLoader(null);
  } catch (error) {
    console.error("failed to get data");
    setLoader("error");
  }
};

export const getRating = async (ratingDispatch, snackbarDispatch) => {
  try {
    const response = await axios.get(GET_RATING);
    if (!response.data.success) {
      throw new Error("Could not get your liked videos :(");
    }
    ratingDispatch({ type: "SET_RATING", payload: response.data.rating });
  } catch (error) {
    console.dir(error);
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.message
    });
  }
};

export const getAllPlaylist = async (playlistDispatch, snackbarDispatch) => {
  try {
    const response = await axios.get(GET_PLAYLIST);
    if (!response.data.success) {
      throw new Error("Could not get your playlists :(");
    }
    playlistDispatch({ type: "SET_PLAYLIST", payload: response.data.playlist });
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.message
    });
  }
};

export const getHistory = async (historyDispatch, snackbarDispatch) => {
  try {
    const response = await axios.get(GET_HISTORY);
    if (!response.data.success) {
      throw new Error("Server Error: Could not get your history");
    }
    historyDispatch({ type: "SET_HISTORY", payload: response.data.history });
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.message
    });
  }
};

export const getVideo = async (id, setVideo, setLoader) => {
  try {
    setLoader("show");
    const response = await axios.get(GET_VIDEO + id);
    setVideo(response.data.video);
    setLoader(null);
  } catch (error) {
    console.error("could not find video");
    setLoader("error");
  }
};

export const incrementViewCount = async (id) => {
  try {
    await axios.get(INCREMENT_VIEW_COUNT + `${id}/view`);
  } catch (error) {
    return;
  }
};

export const likeVideo = async (video, ratingDispatch, snackbarDispatch) => {
  try {
    const response = await axios.post(LIKE_VIDEO, { videoID: video._id });
    if (response.data.success) {
      ratingDispatch({ type: "LIKE", payload: video });
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Added to Liked videos"
      });
    } else {
      throw new Error("Couldn't like video");
    }
  } catch (error) {
    snackbarDispatch({ type: "SHOW_SNACKBAR", payload: error.message });
  }
};

export const unlikeVideo = async (video, ratingDispatch, snackbarDispatch) => {
  try {
    const response = await axios.post(UNLIKE_VIDEO, { videoID: video._id });
    if (response.data.success) {
      ratingDispatch({ type: "UNLIKE", payload: video });
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Removed from Liked videos"
      });
    } else {
      throw new Error("Couldn't Unlike video");
    }
  } catch (error) {
    snackbarDispatch({ type: "SHOW_SNACKBAR", payload: error.message });
  }
};

export const dislikeVideo = async (video, ratingDispatch, snackbarDispatch) => {
  try {
    const response = await axios.post(DISLIKE_VIDEO, { videoID: video._id });
    if (response.data.success) {
      ratingDispatch({ type: "DISLIKE", payload: video });
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "You dislike this video"
      });
    } else {
      throw new Error("Couldn't Dislike video");
    }
  } catch (error) {
    snackbarDispatch({ type: "SHOW_SNACKBAR", payload: error.message });
  }
};

export const unDislikeVideo = async (
  video,
  ratingDispatch,
  snackbarDispatch
) => {
  try {
    const response = await axios.post(UNDISLIKE_VIDEO, { videoID: video._id });
    if (response.data.success) {
      ratingDispatch({ type: "UNDISLIKE", payload: video });
      snackbarDispatch({ type: "SHOW_SNACKBAR", payload: "Dislike removed" });
    } else {
      throw new Error("Couldn't remove dislike");
    }
  } catch (error) {
    snackbarDispatch({ type: "SHOW_SNACKBAR", payload: error.message });
  }
};

export const getPlaylist = async (id, setPlaylist, setLoader) => {
  try {
    setLoader("show");
    const response = await axios.get(GET_PLAYLIST + id);
    setPlaylist(response.data.playlist);
    setLoader(null);
  } catch (error) {
    console.error("could not find playlist");
    setLoader("error");
  }
};

export const addToPlaylist = async (
  video,
  item,
  playlistDispatch,
  snackbarDispatch
) => {
  try {
    const response = await axios.post(ADD_TO_PLAYLIST, {
      playlist_name: item.playlist_name,
      videoID: video._id
    });
    if (response.data.success) {
      playlistDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: {
          playlistName: item.playlist_name,
          video
        }
      });
      snackbarDispatch({ type: "SHOW_SNACKBAR", payload: "Added to Playlist" });
    }
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Could not add to playlist"
    });
  }
};

export const createPlaylist = async (
  video,
  playlistName,
  playlistDispatch,
  snackbarDispatch
) => {
  try {
    const response = await axios.post(CREATE_PLAYLIST, {
      playlist_name: playlistName,
      videoID: video._id
    });
    if (response.data.success) {
      const id = response.data.playlist.playlists[response.data.playlist.playlists.length - 1]._id;
      playlistDispatch({
        type: "CREATE_AND_ADD_TO_PLAYLIST",
        payload: { id, playlistName, video }
      });
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Playlist created"
      });
    } else {
      throw new Error("Could not create playlist");
    }
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: error.message
    });
  }
};

export const deletePlaylist = async (playlistID, playlistDispatch ,snackbarDispatch, navigate) => {
  try {
    const response = await axios.delete(`${DELETE_PLAYLIST}${playlistID}`);
    if (response.data.success) {
      playlistDispatch({
        type: "DELETE_PLAYLIST",
        payload: { id: response.data.playlistID }
      })
      snackbarDispatch({
        type: "SHOW_SNACKBAR",
        payload: "Playlist deleted"
      })
      navigate('/playlist')
    }
  } catch (error) {
    snackbarDispatch({
      type: "SHOW_SNACKBAR",
      payload: "Couldn't delete playlist"
    })
  }
}

export const addToHistory = async (video, historyDispatch) => {
  try {
    const response = await axios.post(ADD_TO_HISTORY, {
      videoID: video._id
    });
    if (response.data.success) {
      historyDispatch({ type: "ADD_TO_HISTORY", payload: video });
    }
  } catch (error) {
    console.error(error);
  }
};

export const clearHistory = async (historyDispatch, snackbarDispatch) => {
  try {
    const response = await axios.delete(CLEAR_HISTORY);
    if (response.data.success) {
      historyDispatch({ type: "CLEAR_HISTORY" });
      snackbarDispatch({ type: "SHOW_SNACKBAR", payload: "History cleared" });
    }
  } catch (error) {
    snackbarDispatch({ type: "SHOW_SNACKBAR", payload: error.message });
  }
};
