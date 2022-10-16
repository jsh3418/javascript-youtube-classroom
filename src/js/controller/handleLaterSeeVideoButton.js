import { CURRENT_PAGE } from "../constants/constants.js";
import { $ } from "../utils/DOM.js";
import { isEmptySaveVideoList } from "../validation/validation.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { hideElement, showElement } from "../view/view.js";

export const handleLaterSeeVideoButtonClick = () => {
  const currentPage = CURRENT_PAGE.LATER_SEE_VIDEO;
  const $noVideos = $(".no-videos");

  paintSaveVideos(currentPage);
  isEmptySaveVideoList(currentPage) ? showElement($noVideos) : hideElement($noVideos);
};
