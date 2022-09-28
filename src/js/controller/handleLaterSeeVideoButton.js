import { changeCurrentPageToLaterSeeVideo, store } from "../model/model.js";
import { clearLaterSeeVideos, paintSaveVideos } from "../view/saveVideos.js";

export const handleLaterSeeVideoButton = () => {
  changeCurrentPageToLaterSeeVideo();
  clearLaterSeeVideos();
  paintSaveVideos(store.currentPage);
};
