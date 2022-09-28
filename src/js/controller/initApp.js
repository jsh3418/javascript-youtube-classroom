import { store } from "../model/model.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { LOCALSTORAGE_KEY } from "../constants/constants.js";
import { getLocalStorage } from "../utils/utils.js";

export const initApp = () => {
  if (getLocalStorage(LOCALSTORAGE_KEY)) {
    store.saveVideos = getLocalStorage(LOCALSTORAGE_KEY);
    paintSaveVideos(store.currentPage);
  }
};
