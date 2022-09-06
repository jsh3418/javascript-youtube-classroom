import { $ } from "./utils/DOM.js";
import { handleSearchModalButton } from "./controller/handleSearchModalButton.js";

const $searchModalButton = $("#search-modal-button");

const initApp = () => {
  $searchModalButton.addEventListener("click", handleSearchModalButton);
};

initApp();
