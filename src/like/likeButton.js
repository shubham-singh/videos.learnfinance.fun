import { useLike } from "./like.context";
import { ReactComponent as ThumbsUpFilled } from "../assets/icons/ThumbsUpFilled.svg";
import { ReactComponent as ThumbsUpOutlined } from "../assets/icons/ThumbsUpOutlined.svg";
const LikeButton = ({ video }) => {
  const { likedVideos, likeDispatch } = useLike();

  const isVideoLiked = (likedVideosArr, video) => {
    return likedVideosArr.some((likedVideo) => likedVideo._id === video._id);
  };

  const isLiked = isVideoLiked(likedVideos, video);

  const likeVideo = async () => {
    try {
      likeDispatch({ type: "LIKE", payload: video });
    } catch (err) {
      console.log("couldn't like the video");
    }
  };

  const unlikeVideo = async () => {
    try {
      likeDispatch({ type: "UNLIKE", payload: video });
    } catch (err) {
      console.log("couldn't unlike the video");
    }
  };

  return (
    <>
      {isLiked ? (
        <ThumbsUpFilled className="pointer" onClick={unlikeVideo} />
      ) : (
        <ThumbsUpOutlined className="pointer" onClick={likeVideo} />
      )}
    </>
  );
};

export default LikeButton;
