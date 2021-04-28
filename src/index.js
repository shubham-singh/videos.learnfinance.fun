import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoContextProvider } from "./video/video.context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <VideoContextProvider>
      <Router>
        <App />
      </Router>
    </VideoContextProvider>
  </StrictMode>,
  rootElement
);
