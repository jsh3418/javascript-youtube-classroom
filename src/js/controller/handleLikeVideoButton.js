import { LOCALSTORAGE_KEY } from "../constants/constants.js";
import { store } from "../model/model.js";
import { setLocalStorage } from "../utils/utils.js";

export const handleLikeVideoButton = (event) => {
  const eventTarget = event.target;

  if (!isLikeButtonClick(eventTarget)) return;

  toggleLikeOfSaveVideo(eventTarget);
  toggleClassListLikeVideo(eventTarget);
  setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);
};

const isLikeButtonClick = (eventTarget) => {
  return eventTarget.classList.contains("like-video-button");
};

const toggleLikeOfSaveVideo = (eventTarget) => {
  store.saveVideos.forEach((video) => {
    if (!isMatchVideoId(video.dataVideoId, eventTarget)) return;
    video.isLike = !video.isLike;
  });
};

const isMatchVideoId = (videoId, eventTarget) => {
  return videoId === eventTarget.closest("li").dataset.videoId;
};

const toggleClassListLikeVideo = (eventTarget) => {
  eventTarget.classList.toggle("like-video");
};
