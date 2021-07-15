import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Iframe from "../Iframe";
import AddToPlaylist from "../playlist/addToPlaylist";
import LikeButton from "../rating/likeButton";
import Loader from "../loader/loader";
import DislikeButton from "../rating/dislikeButton";
import NavbarLayout from "../navigation/navbar.layout";
import { useLoader } from "../loader/loader.context";
import { useHistory } from "../history/history.context";
import {
  addToHistory,
  getVideo,
  incrementViewCount
} from "../utils/server.requests";
import { lang } from "../localisation/localisation.data";
import { useLocalisation } from "../localisation/localisation.context";

const VideoWatch = () => {
  let { id } = useParams();

  const [video, setVideo] = useState("");
  const { loader, setLoader } = useLoader();
  const { historyDispatch } = useHistory();
  const { language } = useLocalisation();

  useEffect(() => {
    getVideo(id, setVideo, setLoader);
  }, []);

  useEffect(() => {
    const timerID = setTimeout(() => {
      incrementViewCount(id);
      addToHistory(video, historyDispatch);
    }, 10000);
    return function () {
      clearTimeout(timerID);
    };
  }, [video, id, historyDispatch]);

  const showVideo = () => {
    if (loader === "show") {
      return <Loader />;
    } else if (loader === "error") {
      return <p>something went wrong :(</p>;
    } else {
      return (
        <>
          <h2>{video.title}</h2>
          <Iframe video={video} />
          <div className="flex-r justify-b">
            <div className="m-m">
              {video.statistics?.viewCount?.toLocaleString()}{" "}
              {lang[language].views}
            </div>
            <div className="flex-row-center">
              <LikeButton video={video} />
              <DislikeButton video={video} />
              <AddToPlaylist video={video} />
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="content">
      <NavbarLayout />
      <div className="video-container">{showVideo()}</div>
    </div>
  );
};

export default VideoWatch;
