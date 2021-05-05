import "./styles.css";
import { Routes, Route } from "react-router-dom";
import NavbarLayout from "./navigation/navbar.layout";
import VideoList from "./video/videos";
import VideoWatch from "./video/videoWatch";
import LikeLayout from "./like/like.layout";
import PlaylistLayout from "./playlist/playlist.layout";
import PlaylistView from "./playlist/playlist.view";
export default function App() {
  return (
    <div className="App">
      <NavbarLayout />
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/watch/:id" element={<VideoWatch />} />
        <Route path="/playlist" element={<PlaylistLayout />} />
        <Route path="/playlist/:id" element={<PlaylistView />} />
        <Route path="/liked" element={<LikeLayout />} />
      </Routes>
    </div>
  );
}
