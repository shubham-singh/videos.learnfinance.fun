import { useVideos } from "./video.context";
import Iframe from "../Iframe";
const VideoList = () => {
  const { videos } = useVideos();

  return (
    <div>
      {videos.map((video) => {
        return <Iframe id={video.id} />;
      })}
    </div>
  );
};

export default VideoList;
