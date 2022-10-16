import { store } from "../model/model.js";
import { LOCALSTORAGE_KEY, SNACKBAR_MESSAGE } from "../constants/constants.js";
import { setLocalStorage } from "../utils/utils.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { showSnackbar } from "../view/snackBar.js";

let isUncheck;
export const handleCheckVideoButtonClick = (event) => {
  const eventTarget = event.target;

  if (!isCheckButton(eventTarget)) return;

  toggleCheckVideo(eventTarget);
  paintSaveVideos(store.currentPage);
  setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);

  if (isUncheck) {
    showSnackbar(SNACKBAR_MESSAGE.CHANGE_SAW_VIDEO);
    return;
  }

  if (!isUncheck) {
    showSnackbar(SNACKBAR_MESSAGE.CHANGE_LATER_SEE_VIDEO);
    return;
  }
};

const isCheckButton = (eventTarget) => {
  return eventTarget.classList.contains("check-video-button");
};

const toggleCheckVideo = (eventTarget) => {
  store.saveVideos.forEach((video) => {
    if (video.dataVideoId === eventTarget.closest("li").dataset.videoId) {
      video.isChecked = !video.isChecked;
      isUncheck = video.isChecked;
    }
  });
};
