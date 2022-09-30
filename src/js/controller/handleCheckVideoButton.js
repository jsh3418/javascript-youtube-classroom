import { store } from "../model/model.js";
import { LOCALSTORAGE_KEY } from "../constants/constants.js";
import { setLocalStorage } from "../utils/utils.js";
import { clearLaterSeeVideos, paintSaveVideos } from "../view/saveVideos.js";
import { showSnackbar } from "../view/snackBar.js";

export const handleCheckVideoButton = (event) => {
  const eventTarget = event.target;
  if (isCheckButton(eventTarget)) {
    checkVideo(eventTarget);
    clearLaterSeeVideos();
    paintSaveVideos(store.currentPage);
    setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);
    showSnackbar("본 영상으로 처리하였습니다.");
  }
};

const isCheckButton = (eventTarget) => {
  return eventTarget.closest("button") && eventTarget.closest("button").classList.contains("check-video-button");
};

const checkVideo = (eventTarget) => {
  store.saveVideos.forEach((video) => {
    if (video.dataVideoId === eventTarget.closest("li").dataset.videoId) {
      video.isChecked = true;
    }
  });
};
