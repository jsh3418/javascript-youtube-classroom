import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";
import { setLocalStorage } from "../utils/utils.js";
import { LOCALSTORAGE_KEY, SNACKBAR_MESSAGE } from "../constants/constants.js";
import { paintSaveVideos } from "../view/saveVideos.js";
import { isEmptySaveVideoList } from "../validation/validation.js";
import { hideElement, showElement } from "../view/view.js";
import { showSnackbar } from "../view/snackBar.js";

const $noVideos = $(".no-videos");

export const handleRemoveVideoButtonClick = ({ target }) => {
  if (!isRemoveVideoButton(target)) return;

  if (!confirm("정말로 삭제하시겠습니까?")) return;

  removeVideo(target);
  setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);
  paintSaveVideos(store.currentPage);
  showSnackbar(SNACKBAR_MESSAGE.REMOVE_SAVE_VIDEO);

  isEmptySaveVideoList(store.currentPage) ? showElement($noVideos) : hideElement($noVideos);
};

const isRemoveVideoButton = (target) => {
  return target.closest("button")?.classList.contains("remove-video-button");
};

const removeVideo = (target) => {
  store.saveVideos.forEach((element, index) => {
    if (element.dataVideoId === target.closest("li").dataset.videoId) {
      store.saveVideos.splice(index, 1);
    }
  });
};
