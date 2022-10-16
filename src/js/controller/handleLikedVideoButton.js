import { hideElement, showElement } from "../view/view.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { CURRENT_PAGE } from "../constants/constants.js";
import { $ } from "../utils/DOM.js";
import { isEmptySaveVideoList } from "../validation/validation.js";

export const handleLikedVideoButtonClick = () => {
  const currentPage = CURRENT_PAGE.LIKE_VIDEO;
  const $noVideos = $(".no-videos");

  paintSaveVideos(currentPage);
  isEmptySaveVideoList(currentPage) ? showElement($noVideos) : hideElement($noVideos);
};
