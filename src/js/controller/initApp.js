import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { LOCALSTORAGE_KEY } from "../constants/constants.js";
import { getLocalStorage } from "../utils/utils.js";
import { hideElement, showElement } from "../view/view.js";
import { isEmptySaveVideoList } from "../validation/validation.js";

const $noVideos = $(".no-videos");

export const initApp = () => {
  if (getLocalStorage(LOCALSTORAGE_KEY)) {
    store.saveVideos = getLocalStorage(LOCALSTORAGE_KEY);
    paintSaveVideos(store.currentPage);
  }

  isEmptySaveVideoList() ? showElement($noVideos) : hideElement($noVideos);
};
