import { CURRENT_PAGE } from "../constants/constants.js";
import { updateCurrentPage, store } from "../model/model.js";
import { $ } from "../utils/DOM.js";
import { isEmptySaveVideoList } from "../validation/validation.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { hideElement, showElement } from "../view/view.js";

export const handleSawVideoButtonClick = () => {
  updateCurrentPage(CURRENT_PAGE.SAW_VIDEO);
  paintSaveVideos(store.currentPage);

  const $noVideos = $(".no-videos");
  isEmptySaveVideoList(store.currentPage) ? showElement($noVideos) : hideElement($noVideos);
};
