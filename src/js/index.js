import { $ } from "./utils/DOM.js";
import { handleSearchModalButton } from "./controller/handleSearchModalButton.js";
import { handleSearchButton } from "./controller/handleSearchButton.js";
import { searchResultInfiniteScroll } from "./controller/searchResultInfiniteScroll.js";
import { handleVideoSaveButton } from "./controller/handleVideoSaveButton.js";
import { closeModal } from "./controller/closeModal.js";
import { initApp } from "./controller/initApp.js";
import { handleCheckVideoButton } from "./controller/handleCheckVideoButton.js";
import { handleRemoveVideoButton } from "./controller/handleRemoveVideoButton.js";
import { handleSawVideoButton } from "./controller/handleSawVideoButton.js";
import { handleLaterSeeVideoButton } from "./controller/handleLaterSeeVideoButton.js";
import { handleLikeButton } from "./controller/handleLikeButton.js";
import { handleLikedVideoButton } from "./controller/handleLikedVideoButton.js";

const $searchModalButton = $("#search-modal-button");
const $searchInput = $(".search-input");
const $videoList = $(".video-list");
const $dimmer = $(".dimmer");
const $body = $("body");
const $saveVideoList = $("#save-video-list");
const $sawVideoButton = $("#saw-video-button");
const $laterSeeVideoButton = $("#later-see-video-button");
const $likeVideoButton = $("#like-video-button");

const initNavigator = () => {
  $sawVideoButton.addEventListener("click", handleSawVideoButton);
  $laterSeeVideoButton.addEventListener("click", handleLaterSeeVideoButton);
  $likeVideoButton.addEventListener("click", handleLikedVideoButton);
  $searchModalButton.addEventListener("click", handleSearchModalButton);
};

const initMainContainer = () => {
  $saveVideoList.addEventListener("click", handleCheckVideoButton);
  $saveVideoList.addEventListener("click", handleRemoveVideoButton);
  $saveVideoList.addEventListener("click", handleLikeButton);
};

const initModal = () => {
  $dimmer.addEventListener("click", closeModal);
  $body.addEventListener("keydown", closeModal);
  $searchInput.addEventListener("submit", handleSearchButton);
  $videoList.addEventListener("scroll", searchResultInfiniteScroll);
  $videoList.addEventListener("click", handleVideoSaveButton);
};

const init = () => {
  window.addEventListener("DOMContentLoaded", initApp);

  initNavigator();
  initMainContainer();
  initModal();
};

init();
