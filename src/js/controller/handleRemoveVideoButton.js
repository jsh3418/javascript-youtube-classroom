import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";
import { setLocalStorage } from "../utils/utils.js";
import { LOCALSTORAGE_KEY, SNACKBAR_MESSAGE } from "../constants/constants.js";
import { clearLaterSeeVideos, paintSaveVideos } from "../view/saveVideos.js";
import { isEmptySaveVideoList } from "../validation/validation.js";
import { hideElement, showElement } from "../view/view.js";
import { showSnackbar } from "../view/snackBar.js";

const $noVideos = $(".no-videos");

export const handleRemoveVideoButtonClick = (event) => {
  const eventTarget = event.target;
  if (!isRemoveVideoButton(eventTarget)) return;

  if (!confirm("정말로 삭제하시겠습니까?")) return;

  removeVideo(eventTarget);
  setLocalStorage(LOCALSTORAGE_KEY, store.saveVideos);
  clearLaterSeeVideos();
  paintSaveVideos(store.currentPage);
  showSnackbar(SNACKBAR_MESSAGE.REMOVE_SAVE_VIDEO);

  isEmptySaveVideoList() ? showElement($noVideos) : hideElement($noVideos);
};

const isRemoveVideoButton = (eventTarget) => {
  return eventTarget.closest("button")?.classList.contains("remove-video-button");
};

const removeVideo = (eventTarget) => {
  store.saveVideos.forEach((element, index) => {
    if (element.dataVideoId === eventTarget.closest("li").dataset.videoId) {
      store.saveVideos.splice(index, 1);
    }
  });
};
