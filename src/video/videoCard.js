import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="m-s">
      <Link to={`/watch/${video._id}`}>
        <img
          alt="thumbnail"
          src={`https://i.ytimg.com/vi/${video.youtubeId}/mqdefault.jpg`}
        />
        <h4 className="m-s">Video Title</h4>
      </Link>
    </div>
  );
};

export default VideoCard;
