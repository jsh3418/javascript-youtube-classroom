import { ERROR_MESSAGE, LOCALSTORAGE_KEY, MAX_SAVE_VIDEO_COUNT } from "../constants/constants.js";
import { addSaveVideos, store } from "../model/model.js";
import { $ } from "../utils/DOM.js";
import { setLocalStorage } from "../utils/utils.js";
import { clearLaterSeeVideos, paintSaveVideos } from "../view/saveVideos.js";
import { hideElement } from "../view/view.js";

export const handleVideoSaveButton = (event) => {
  const eventTarget = event.target;

  if (!isSaveButtonClick(eventTarget)) return;

  if (isMaxSaveVideos()) {
    alert(ERROR_MESSAGE.MAX_SAVE_VIDEO);
    return;
  }

  const video = eventTarget.closest("li");
  const $noVideos = $(".no-videos");

  hideElement(eventTarget);
  hideElement($noVideos);
  addSaveVideos(video);
  clearLaterSeeVideos();
  paintSaveVideos(store.currentPage);
  setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);
};

const isSaveButtonClick = (eventTarget) => eventTarget.classList.contains("video-item__save-button");

const isMaxSaveVideos = () => store.saveVideos.length === MAX_SAVE_VIDEO_COUNT;
