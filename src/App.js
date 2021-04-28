import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Iframe from "./Iframe";
import Nav from "./navigation/Nav";
import VideoList from "./video/videos";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<VideoList />} />
      </Routes>
      {/* <div className="video-container">
        <div className="video">
          <Iframe src="https://www.youtube-nocookie.com/embed/0roQUZvU-As" />
        </div>
      </div> */}
      <div className="video">
        <Iframe src="https://www.youtube-nocookie.com/embed/0roQUZvU-As" />
      </div>
    </div>
  );
}
