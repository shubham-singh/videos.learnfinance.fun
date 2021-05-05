import { useVideos } from "./video.context";
import axios from "axios";
import VideoCard from "./videoCard";
// import videoData from "./test.db";
import { useEffect } from "react";

const VideoList = () => {
  const { videos, videoDispatch } = useVideos();

  const getData = async () => {
    try {
      const videoData = await axios.get(
        "https://videos-learnfinance-fun.herokuapp.com/"
      );
      videoDispatch({ type: "SET_VIDEOS", payload: videoData.data.videos });
    } catch (error) {
      console.error("failed to get data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="heading m-s hide-d">Learn Finance</h1>
      <div className="videos">
        {videos.map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </div>
    </>
  );
};

export default VideoList;
