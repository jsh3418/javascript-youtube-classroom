import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { LOCALSTORAGE_KEY } from "../constants/constants.js";
import { getLocalStorage } from "../utils/utils.js";
import { showElement } from "../view/view.js";

const $noResult = $(".no-result");

export const initApp = () => {
  if (getLocalStorage(LOCALSTORAGE_KEY)) {
    store.laterSeeVideos = getLocalStorage(LOCALSTORAGE_KEY);
    paintSaveVideos(store.currentPage);
  }
  if (!getLocalStorage(LOCALSTORAGE_KEY)) {
    showElement($noResult);
  }
};
