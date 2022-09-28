import { store } from "../model/model.js";
import { LOCALSTORAGE_KEY } from "../constants/constants.js";
import { setLocalStorage } from "../utils/utils.js";

export const handleCheckVideoButton = (event) => {
  if (isCheckButton) {
    store.laterSeeVideos.forEach((video) => {
      if (video.dataVideoId === event.target.closest("li").dataset.videoId) {
        video.isChecked = true;
      }
    });
  }
  setLocalStorage(LOCALSTORAGE_KEY, store.laterSeeVideos);
};

const isCheckButton = (event) => {
  return event.target.closest("button") && event.target.closest("button").classList.contains("check-video-button");
};
