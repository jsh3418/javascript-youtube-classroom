import { $ } from "./utils/DOM.js";
import { handleSearchModalButton } from "./controller/handleSearchModalButton.js";
import { handleSearchKeywordSubmit } from "./controller/handleSearchKeywordSubmit.js";
import { handleSearchButton } from "./controller/handleSearchButton.js";
import { searchResultInfiniteScroll } from "./controller/searchResultInfiniteScroll.js";

const $searchModalButton = $("#search-modal-button");
const $searchInputKeyword = $("#search-input-keyword");
const $searchButton = $("#search-button");
const $videoList = $(".video-list");

const initApp = () => {
  $searchModalButton.addEventListener("click", handleSearchModalButton);
  $searchInputKeyword.addEventListener("keypress", handleSearchKeywordSubmit);
  $searchButton.addEventListener("click", handleSearchButton);
  $videoList.addEventListener("scroll", searchResultInfiniteScroll);
};

initApp();
