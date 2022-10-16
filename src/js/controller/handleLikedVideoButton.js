import { store, updateCurrentPage } from "../model/model.js";
import { hideElement, showElement } from "../view/view.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { CURRENT_PAGE } from "../constants/constants.js";
import { $ } from "../utils/DOM.js";
import { isEmptySaveVideoList } from "../validation/validation.js";

export const handleLikedVideoButtonClick = () => {
  updateCurrentPage(CURRENT_PAGE.LIKE_VIDEO);
  paintSaveVideos(store.currentPage);

  const $noVideos = $(".no-videos");
  isEmptySaveVideoList(store.currentPage) ? showElement($noVideos) : hideElement($noVideos);
};
