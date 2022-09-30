import { changeCurrentPageToSawVideo, store } from "../model/model.js";
import { $ } from "../utils/DOM.js";
import { isEmptySaveVideoList } from "../validation/validation.js";
import { clearLaterSeeVideos, paintSaveVideos } from "../view/saveVideos.js";
import { hideElement, showElement } from "../view/view.js";

export const handleSawVideoButton = () => {
  changeCurrentPageToSawVideo();
  clearLaterSeeVideos();
  paintSaveVideos(store.currentPage);

  const $noVideos = $(".no-videos");
  isEmptySaveVideoList() ? showElement($noVideos) : hideElement($noVideos);
};
