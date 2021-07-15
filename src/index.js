import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoContextProvider } from "./video/video.context";

import App from "./App";
import { PlaylistContextProvider } from "./playlist/playlist.context";
import { RatingContextProvider } from "./rating/rating.context";
import { AuthContextProvider } from "./auth/auth.context";
import { LocalisationContextProvider } from "./localisation/localisation.context";
import { SnackbarContextProvider } from "./snackbar/snackbar.context";
import { LoaderContextProvider } from "./loader/loader.context";
import { HistoryContextProvider } from "./history/history.context";
import ScrollToTop from "./utils/scrollToTop";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocalisationContextProvider>
      <SnackbarContextProvider>
        <VideoContextProvider>
          <AuthContextProvider>
            <HistoryContextProvider>
              <PlaylistContextProvider>
                <RatingContextProvider>
                  <LoaderContextProvider>
                    <Router>
                      <ScrollToTop />
                      <App />
                    </Router>
                  </LoaderContextProvider>
                </RatingContextProvider>
              </PlaylistContextProvider>
            </HistoryContextProvider>
          </AuthContextProvider>
        </VideoContextProvider>
      </SnackbarContextProvider>
    </LocalisationContextProvider>
  </StrictMode>,
  rootElement
);
