import { CURRENT_PAGE } from "../constants/constants.js";
import { store } from "../model/model.js";

export const isEmptySaveVideoList = (currentPage) => {
  if (currentPage === CURRENT_PAGE.LATER_SEE_VIDEO) {
    return !store.saveVideos.filter((video) => video.isChecked === false);
  }

  if (currentPage === CURRENT_PAGE.SAW_VIDEO) {
    return !store.saveVideos.filter((video) => video.isChecked === true);
  }

  if (currentPage === CURRENT_PAGE.LIKE_VIDEO) {
    return !store.saveVideos.filter((video) => video.isLike === true);
  }
};
