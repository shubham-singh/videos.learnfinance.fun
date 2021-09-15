import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth.context";
import { useSnackbar } from "../snackbar/snackbar.context";
import { useRating } from "./rating.context";
import { dislikeVideo, unDislikeVideo } from "../utils/server.requests";
import { ReactComponent as ThumbsDownFilled } from "../assets/icons/ThumbsDownFilled.svg";
import { ReactComponent as ThumbsDownOutlined } from "../assets/icons/ThumbsDownOutlined.svg";
import { isItemInArray } from "../utils/function";

const DislikeButton = ({ video }) => {
  const { likedVideos, dislikedVideos, ratingDispatch } = useRating();
  const { user } = useAuth();
  const { snackbarDispatch } = useSnackbar();
  const navigate = useNavigate();

  const isDisliked = isItemInArray(dislikedVideos, video);
  const isLiked = isItemInArray(likedVideos, video);

  const handleDislike = () => {
    if (user.loggedIn) {
      dislikeVideo(video, ratingDispatch, snackbarDispatch);
      video.statistics.dislikeCount++;
      if (isLiked) {
        ratingDispatch({ type: "UNLIKE", payload: video });
        video.statistics.likeCount--;
      }
    } else {
      return navigate("/login", { state: { from: `/watch/${video._id}` } });
    }
  };

  const handleUndislike = () => {
    if (user.loggedIn) {
      unDislikeVideo(video, ratingDispatch, snackbarDispatch);
      video.statistics.dislikeCount--;
    } else {
      return navigate("/login", { state: { from: `/watch/${video._id}` } });
    }
  };

  return (
    <>
      {isDisliked ? (
        <ThumbsDownFilled className="pointer m-s" onClick={handleUndislike} />
      ) : (
        <ThumbsDownOutlined className="pointer m-s" onClick={handleDislike} />
      )}
      <h2>{video.statistics?.dislikeCount}</h2>
    </>
  );
};

export default DislikeButton;
