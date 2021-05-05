import { useParams } from "react-router-dom";
import Iframe from "../Iframe";
import AddToPlaylist from "../playlist/addToPlaylist";
import LikeButton from "../like/likeButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useVideos } from "./video.context";

const VideoWatch = () => {
  let { id } = useParams();

  const { videos } = useVideos();
  // const video = videos.find((video) => video._id === id);
  const [video, setVideo] = useState("");

  const getVideo = async () => {
    try {
      const video = await axios.get(
        `https://videos-learnfinance-fun.herokuapp.com/video/${id}`
      );
      setVideo(video.data.video);
    } catch (error) {
      console.error("could not find video");
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="video-container">
      <h1>{video.title}</h1>
      <Iframe video={video} />
      <div className="flex-r video-actions">
        <LikeButton video={video} />
        <AddToPlaylist video={video} />
      </div>
    </div>
  );
};

export default VideoWatch;
