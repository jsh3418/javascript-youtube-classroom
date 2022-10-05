import { LOCALSTORAGE_KEY, SNACKBAR_MESSAGE } from "../constants/constants.js";
import { store } from "../model/model.js";
import { setLocalStorage } from "../utils/utils.js";
import { clearLaterSeeVideos, paintSaveVideos } from "../view/saveVideos.js";
import { showSnackbar } from "../view/snackBar.js";

export const handleLikeButton = (event) => {
  const eventTarget = event.target;

  if (!isLikeButtonClick(eventTarget)) return;

  toggleLikeOfSaveVideo(eventTarget);
  clearLaterSeeVideos();
  paintSaveVideos(store.currentPage);
  setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);

  if (isLike) {
    showSnackbar(SNACKBAR_MESSAGE.CHANGE_LIKE_VIDEO);
    return;
  }
  if (!isLike) {
    showSnackbar(SNACKBAR_MESSAGE.CHANGE_CANCEL_LIKE_VIDEO);
    return;
  }
};

const isLikeButtonClick = (eventTarget) => {
  return eventTarget.classList.contains("like-video-button");
};

let isLike;
const toggleLikeOfSaveVideo = (eventTarget) => {
  store.saveVideos.forEach((video) => {
    if (!isMatchVideoId(video.dataVideoId, eventTarget)) return;
    video.isLike = !video.isLike;
    isLike = video.isLike;
  });
};

const isMatchVideoId = (videoId, eventTarget) => {
  return videoId === eventTarget.closest("li").dataset.videoId;
};
