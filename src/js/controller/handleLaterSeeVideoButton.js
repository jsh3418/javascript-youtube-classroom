import { CURRENT_PAGE } from "../constants/constants.js";
import { store, updateCurrentPage } from "../model/model.js";
import { $ } from "../utils/DOM.js";
import { isEmptySaveVideoList } from "../validation/validation.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { hideElement, showElement } from "../view/view.js";

export const handleLaterSeeVideoButtonClick = () => {
  updateCurrentPage(CURRENT_PAGE.LATER_SEE_VIDEO);
  paintSaveVideos(store.currentPage);

  const $noVideos = $(".no-videos");
  isEmptySaveVideoList(store.currentPage) ? showElement($noVideos) : hideElement($noVideos);
};
