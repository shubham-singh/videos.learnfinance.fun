import { createContext, useContext, useReducer } from "react";
import VideoReducer from "./video.reducer.js";

import videosList from "./test.db";

const VideoContext = createContext();

export const VideoContextProvider = (props) => {
  const [videos, dispatch] = useReducer(VideoReducer, {
    // videos: []
    videos: videosList
  });

  return (
    <VideoContext.Provider
      value={{
        videos: videos.videos,
        videoDispatch: dispatch
      }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => {
  return useContext(VideoContext);
};
