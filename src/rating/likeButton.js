import { useRating } from "./rating.context";
import { useAuth } from "../auth/auth.context";
import { ReactComponent as ThumbsUpFilled } from "../assets/icons/ThumbsUpFilled.svg";
import { ReactComponent as ThumbsUpOutlined } from "../assets/icons/ThumbsUpOutlined.svg";
import { debounce, isItemInArray } from "../utils/function";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "../snackbar/snackbar.context";
import { likeVideo, unlikeVideo } from "../utils/server.requests";

const LikeButton = ({ video }) => {
  const { likedVideos, dislikedVideos, ratingDispatch } = useRating();
  const { user } = useAuth();
  const { snackbarDispatch } = useSnackbar();
  const navigate = useNavigate();

  const isLiked = isItemInArray(likedVideos, video);
  const isDisliked = isItemInArray(dislikedVideos, video);

  const handleLike = debounce(function () {
    if (user.loggedIn) {
      likeVideo(video, ratingDispatch, snackbarDispatch);
      video.statistics.likeCount++;
      if (isDisliked) {
        ratingDispatch({ type: "UNDISLIKE", payload: video });
        video.statistics.dislikeCount--;
      }
    } else {
      return navigate("/login", { state: { from: `/watch/${video._id}` } });
    }
  })

  const handleUnlike = debounce(function () {
    if (user.loggedIn) {
      unlikeVideo(video, ratingDispatch, snackbarDispatch);
      video.statistics.likeCount--;
    } else {
      return navigate("/login", { state: { from: `/watch/${video._id}` } });
    }
  });

  return (
    <>
      {isLiked ? (
        <ThumbsUpFilled className="pointer m-s" onClick={handleUnlike} />
      ) : (
        <ThumbsUpOutlined className="pointer m-s" onClick={handleLike} />
      )}
      <h2>{video.statistics?.likeCount} </h2>
    </>
  );
};

export default LikeButton;
