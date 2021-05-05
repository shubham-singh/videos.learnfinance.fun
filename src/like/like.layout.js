import { useLike } from "./like.context";
import VideoCard from "../video/videoCard";
import { Link } from "react-router-dom";

const LikeLayout = () => {
  const { likedVideos } = useLike();

  if (likedVideos.length === 0) {
    return (
      <div className="flex-c h-full-vp videos">
        <span className="x-large">seems empty :(</span>
        <Link to="/">
          <button className="btn btn-classic shadow medium mt-m">
            See videos
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <span className="top-grid x-large">Liked videos</span>
        <div className="videos">
          {likedVideos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </div>
      </>
    );
  }
};

export default LikeLayout;
