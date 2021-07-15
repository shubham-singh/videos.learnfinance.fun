import { useEffect } from "react";
import VideoCard from "./videoCard";
import NavbarLayout from "../navigation/navbar.layout";
import Loader from "../loader/loader";
import { useVideos } from "./video.context";
import { useLoader } from "../loader/loader.context";
import { getAllVideos } from "../utils/server.requests";
import { lang } from "../localisation/localisation.data";
import { useLocalisation } from "../localisation/localisation.context";

const VideoList = () => {
  const { videos, videoDispatch } = useVideos();
  const { loader, setLoader } = useLoader();
  const { language } = useLocalisation();

  useEffect(() => {
    getAllVideos(videoDispatch, setLoader);
  }, []);

  const showVideos = () => {
    if (loader === "show") {
      return <Loader />;
    } else if (loader === "error") {
      return <p>{lang[language].videosError}</p>;
    } else {
      return (
        <div className="videos">
          {videos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </div>
      );
    }
  };

  return (
    <div className="content">
      <NavbarLayout />
      <h1 className="heading m-s hide-d">{lang[language].learnFinance}</h1>
      {showVideos()}
    </div>
  );
};

export default VideoList;
