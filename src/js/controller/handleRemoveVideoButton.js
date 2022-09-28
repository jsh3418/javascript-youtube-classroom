import { store } from "../model/model.js";
import { setLocalStorage } from "../utils/utils.js";
import { LOCALSTORAGE_KEY } from "../constants/constants.js";
import { clearLaterSeeVideos, paintLaterSeeVideos } from "../view/saveVideos.js";

export const handleRemoveVideoButton = (event) => {
  const eventTarget = event.target;
  if (!isRemoveVideoButton(eventTarget)) {
    return;
  }

  if (confirm("정말로 삭제하시겠습니까?")) {
    removeVideo(eventTarget);
  }

  setLocalStorage(LOCALSTORAGE_KEY, store.laterSeeVideos);
  clearLaterSeeVideos();
  paintLaterSeeVideos();
};

const isRemoveVideoButton = (eventTarget) => {
  return eventTarget.closest("button")?.classList.contains("remove-video-button");
};

const removeVideo = (eventTarget) => {
  store.laterSeeVideos.forEach((element, index) => {
    if (element.dataVideoId === eventTarget.closest("li").dataset.videoId) {
      store.laterSeeVideos.splice(index, 1);
    }
  });
};
