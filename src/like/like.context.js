import { createContext, useContext, useReducer } from "react";
import LikeReducer from "./like.reducer.js";

const LikeContext = createContext();

export const LikeContextProvider = (props) => {
  const [like, dispatch] = useReducer(LikeReducer, {
    videos: []
  });

  return (
    <LikeContext.Provider
      value={{ likedVideos: like.videos, likeDispatch: dispatch }}
    >
      {props.children}
    </LikeContext.Provider>
  );
};

export const useLike = () => useContext(LikeContext);
