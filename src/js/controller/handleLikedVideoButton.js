import { store, updateCurrentPage } from "../model/model.js";
import { hideElement, showElement } from "../view/view.js";
import { clearLaterSeeVideos, paintSaveVideos } from "../view/saveVideos.js";
import { CURRENT_PAGE } from "../constants/constants.js";
import { $ } from "../utils/DOM.js";
import { isEmptySaveVideoList } from "../validation/validation.js";

export const handleLikedVideoButton = () => {
  clearLaterSeeVideos();
  updateCurrentPage(CURRENT_PAGE.LIKE_VIDEO);
  paintSaveVideos(store.currentPage);

  const $noVideos = $(".no-videos");
  isEmptySaveVideoList() ? showElement($noVideos) : hideElement($noVideos);
};
