import { $ } from "./utils/DOM.js";
import { handleSearchModalButton } from "./controller/handleSearchModalButton.js";
import { handleSearchButton } from "./controller/handleSearchButton.js";
import { searchResultInfiniteScroll } from "./controller/searchResultInfiniteScroll.js";
import { handleVideoSaveButton } from "./controller/handleVideoSaveButton.js";
import { closeModal } from "./controller/closeModal.js";

const $searchModalButton = $("#search-modal-button");
const $searchInput = $(".search-input");
const $videoList = $(".video-list");
const $dimmer = $(".dimmer");
const $body = $("body");

const initApp = () => {
  $searchModalButton.addEventListener("click", handleSearchModalButton);
  $searchInput.addEventListener("submit", handleSearchButton);
  $videoList.addEventListener("scroll", searchResultInfiniteScroll);
  $videoList.addEventListener("click", handleVideoSaveButton);
  $dimmer.addEventListener("click", closeModal);
  $body.addEventListener("keydown", closeModal);
};

initApp();
