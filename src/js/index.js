import { $ } from "./utils/DOM.js";
import { handleSearchModalButton } from "./controller/handleSearchModalButton.js";
import { handleSearchKeywordSubmit } from "./controller/handleSearchKeywordSubmit.js";
import { handleSearchButton } from "./controller/handleSearchButton.js";

const $searchModalButton = $("#search-modal-button");
const $searchInputKeyword = $("#search-input-keyword");
const $searchButton = $("#search-button");

const initApp = () => {
  $searchModalButton.addEventListener("click", handleSearchModalButton);
  $searchInputKeyword.addEventListener("keypress", handleSearchKeywordSubmit);
  $searchButton.addEventListener("click", handleSearchButton);
};

initApp();
