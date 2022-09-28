import { changeCurrentPageToSawVideo, store } from "../model/model.js";
import { clearLaterSeeVideos, paintSaveVideos } from "../view/saveVideos.js";

export const handleSawVideoButton = () => {
  changeCurrentPageToSawVideo();
  clearLaterSeeVideos();
  paintSaveVideos(store.currentPage);
};
