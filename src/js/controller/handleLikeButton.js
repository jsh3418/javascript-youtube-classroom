import { LOCALSTORAGE_KEY, SNACKBAR_MESSAGE } from "../constants/constants.js";
import { store } from "../model/model.js";
import { setLocalStorage } from "../utils/utils.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { showSnackbar } from "../view/snackBar.js";

export const handleLikeButtonClick = ({ target }) => {
  if (!isLikeButtonClick(target)) return;

  toggleLikeOfSaveVideo(target);
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

const isLikeButtonClick = (target) => {
  return target.classList.contains("like-video-button");
};

let isLike;
const toggleLikeOfSaveVideo = (target) => {
  store.saveVideos.forEach((video) => {
    if (!isMatchVideoId(video.dataVideoId, target)) return;
    video.isLike = !video.isLike;
    isLike = video.isLike;
  });
};

const isMatchVideoId = (videoId, target) => {
  return videoId === target.closest("li").dataset.videoId;
};
