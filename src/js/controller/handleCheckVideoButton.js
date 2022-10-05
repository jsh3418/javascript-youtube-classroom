import { store } from "../model/model.js";
import { LOCALSTORAGE_KEY } from "../constants/constants.js";
import { setLocalStorage } from "../utils/utils.js";
import { clearLaterSeeVideos, paintSaveVideos } from "../view/saveVideos.js";
import { showSnackbar } from "../view/snackBar.js";

let isUncheck;
export const handleCheckVideoButton = (event) => {
  const eventTarget = event.target;

  if (!isCheckButton(eventTarget)) return;

  toggleCheckVideo(eventTarget);
  clearLaterSeeVideos();
  paintSaveVideos(store.currentPage);
  setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);

  isUncheck ? showSnackbar("본 영상으로 처리하였습니다.") : showSnackbar("볼 영상으로 처리하였습니다.");
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
