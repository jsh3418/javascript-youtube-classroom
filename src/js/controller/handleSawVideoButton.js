import { CURRENT_PAGE } from "../constants/constants.js";
import { $ } from "../utils/DOM.js";
import { isEmptySaveVideoList } from "../validation/validation.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { hideElement, showElement } from "../view/view.js";

export const handleSawVideoButtonClick = () => {
  const currentPage = CURRENT_PAGE.SAW_VIDEO;
  const $noVideos = $(".no-videos");

  paintSaveVideos(currentPage);
  isEmptySaveVideoList(currentPage) ? showElement($noVideos) : hideElement($noVideos);
};
