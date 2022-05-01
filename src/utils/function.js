import axios from "axios";

export const setupAuthHeaderForServiceCalls = () => {
  const token = JSON.parse(localStorage.getItem("auth_learnfinance"));
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
};

export const deleteAuthToken = () => {
  localStorage.removeItem("auth_learnfinance");
  setTimeout(() => {
    window.location.reload();
  }, 0)
};

export const isVideoLiked = (likedVideosArr, video) => {
  return likedVideosArr.some((likedVideo) => likedVideo._id === video._id);
};

export const isItemInArray = (itemArray, item) => {
  return itemArray.some((current) => current._id === item._id);
};

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
};

export function debounce(func, timer = 700) {
  let timeoutID = null;
  return () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      func();
    }, timer);
  }
}