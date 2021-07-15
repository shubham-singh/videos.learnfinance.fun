import { Link } from "react-router-dom";
import VideoCard from "../video/videoCard";
import NavbarLayout from "../navigation/navbar.layout";
import { useRating } from "./rating.context";
import { useLocalisation } from "../localisation/localisation.context";
import { lang } from "../localisation/localisation.data";

const LikeLayout = () => {
  const { likedVideos } = useRating();
  const { language } = useLocalisation();

  if (likedVideos.length === 0) {
    return (
      <div className="content">
        <NavbarLayout />
        <div className="flex-c h-full-vp videos">
          <span className="x-large">{lang[language].seemsEmpty}</span>
          <Link to="/">
            <button className="btn btn-classic shadow medium mt-m">
              {lang[language].seeVideos}
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="content">
        <NavbarLayout />
        <span className="top-grid x-large">{lang[language].likedVideos}</span>
        <div className="videos">
          {likedVideos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </div>
      </div>
    );
  }
};

export default LikeLayout;
