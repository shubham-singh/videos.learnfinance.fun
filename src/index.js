import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoContextProvider } from "./video/video.context";

import App from "./App";
import { PlaylistContextProvider } from "./playlist/playlist.context";
import { LikeContextProvider } from "./like/like.context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <VideoContextProvider>
      <PlaylistContextProvider>
        <LikeContextProvider>
          <Router>
            <App />
          </Router>
        </LikeContextProvider>
      </PlaylistContextProvider>
    </VideoContextProvider>
  </StrictMode>,
  rootElement
);
