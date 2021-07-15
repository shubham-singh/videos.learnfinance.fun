import "./styles.css";
import { Routes, Route } from "react-router-dom";
import VideoList from "./video/videos";
import VideoWatch from "./video/videoWatch";
import LikeLayout from "./rating/like.layout";
import PlaylistLayout from "./playlist/playlist.layout";
import PlaylistView from "./playlist/playlist.view";
import PrivateRoute from "./auth/privateRoute";
import Snackbar from "./snackbar/snackbar";
import Login from "./login/login";
import Signup from "./login/signup";
import History from "./history/history";
import FooterMobile from "./footer/footer.mobile";

export default function App() {
  return (
    <div className="App">
      <Snackbar />
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/watch/:id" element={<VideoWatch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/playlist" element={<PlaylistLayout />} />
        <PrivateRoute path="/playlist/:id" element={<PlaylistView />} />
        <PrivateRoute path="/liked" element={<LikeLayout />} />
        <PrivateRoute path="/history" element={<History />} />
      </Routes>
      <FooterMobile />
    </div>
  );
}
