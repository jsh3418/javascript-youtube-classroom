import { store } from "../model/model.js";
import { LOCALSTORAGE_KEY } from "../constants/constants.js";
import { setLocalStorage } from "../utils/utils.js";

export const handleCheckVideoButton = (event) => {
  const eventTarget = event.target;
  if (isCheckButton(eventTarget)) {
    store.laterSeeVideos.forEach((video) => {
      if (video.dataVideoId === eventTarget.closest("li").dataset.videoId) {
        video.isChecked = true;
      }
    });
  }
  setLocalStorage(LOCALSTORAGE_KEY, store.laterSeeVideos);
};

const isCheckButton = (eventTarget) => {
  return eventTarget.closest("button") && eventTarget.closest("button").classList.contains("check-video-button");
};
