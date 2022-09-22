import { LOCALSTORAGE_KEY, SAVE_VIDEOS_MAX_COUNT } from "../constants/constants.js";
import { addSaveVideos, store } from "../model/model.js";
import { setLocalStorage } from "../utils/utils.js";
import { hideElement } from "../view/view.js";

export const handleVideoSaveButton = (event) => {
  if (event.target.closest("button") && store.saveVideos.length <= SAVE_VIDEOS_MAX_COUNT) {
    const videoList = event.target.closest("li");

    hideElement(event.target);
    addSaveVideos(videoList);
    setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);
  }
};
