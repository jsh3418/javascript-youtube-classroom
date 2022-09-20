import { LOCALSTORAGE_KEY, SAVE_VIDEOS_MAX_COUNT } from "../constants/constants.js";
import { addSaveVideos, store } from "../model/model.js";
import { setLocalStorage } from "../utils/utils.js";
import { hideSaveButton } from "../view/saveVideos.js";

export const handleVideoSaveButton = (event) => {
  if (event.target.closest("button") && store.saveVideos.length <= SAVE_VIDEOS_MAX_COUNT) {
    const videoList = event.target.closest("li");

    addSaveVideos(videoList);
    hideSaveButton();
    setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);
  }
};
