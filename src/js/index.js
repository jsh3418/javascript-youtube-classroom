import { $ } from "./utils/DOM.js";
import { handleSearchModalButtonClick } from "./controller/handleSearchModalButton.js";
import { handleSearchSubmit } from "./controller/handleSearchButton.js";
import { handleVideoListScroll } from "./controller/searchResultInfiniteScroll.js";
import { handleVideoSaveButtonClick } from "./controller/handleVideoSaveButton.js";
import { closeModal } from "./controller/closeModal.js";
import { handleCheckVideoButtonClick } from "./controller/handleCheckVideoButton.js";
import { handleRemoveVideoButtonClick } from "./controller/handleRemoveVideoButton.js";
import { handleSawVideoButtonClick } from "./controller/handleSawVideoButton.js";
import { handleLaterSeeVideoButtonClick } from "./controller/handleLaterSeeVideoButton.js";
import { handleLikeButtonClick } from "./controller/handleLikeButton.js";
import { handleLikedVideoButtonClick } from "./controller/handleLikedVideoButton.js";
import { store } from "./model/model.js";
import { LOCALSTORAGE_KEY } from "./constants/constants.js";
import { getLocalStorage } from "./utils/utils.js";
import { paintSaveVideos } from "./view/saveVideos.js";
import { hideElement, showElement } from "./view/view.js";

const $searchModalButton = $("#search-modal-button");
const $searchInput = $(".search-input");
const $videoList = $(".video-list");
const $dimmer = $(".dimmer");
const $body = $("body");
const $saveVideoList = $("#save-video-list");
const $sawVideoButton = $("#saw-video-button");
const $laterSeeVideoButton = $("#later-see-video-button");
const $likeVideoButton = $("#like-video-button");
const $noVideos = $(".no-videos");

const initNavigator = () => {
  $sawVideoButton.addEventListener("click", handleSawVideoButtonClick);
  $laterSeeVideoButton.addEventListener("click", handleLaterSeeVideoButtonClick);
  $likeVideoButton.addEventListener("click", handleLikedVideoButtonClick);
  $searchModalButton.addEventListener("click", handleSearchModalButtonClick);
};

const initMainContainer = () => {
  $saveVideoList.addEventListener("click", handleCheckVideoButtonClick);
  $saveVideoList.addEventListener("click", handleRemoveVideoButtonClick);
  $saveVideoList.addEventListener("click", handleLikeButtonClick);

  store.saveVideos = getLocalStorage(LOCALSTORAGE_KEY) ?? [];

  if (store.saveVideos.length === 0) {
    showElement($noVideos);
    return;
  }

  hideElement($noVideos);
  paintSaveVideos(store.currentPage);
};

const initModal = () => {
  $dimmer.addEventListener("click", closeModal);
  $body.addEventListener("keydown", closeModal);
  $searchInput.addEventListener("submit", handleSearchSubmit);
  $videoList.addEventListener("scroll", handleVideoListScroll);
  $videoList.addEventListener("click", handleVideoSaveButtonClick);
};

const init = () => {
  initNavigator();
  initMainContainer();
  initModal();
};

init();
