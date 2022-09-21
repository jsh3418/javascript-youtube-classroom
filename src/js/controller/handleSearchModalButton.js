import { $ } from "../utils/DOM.js";
import { showElement } from "../view/view.js";

const $modalContainer = $(".modal-container");

export const handleSearchModalButton = () => {
  showElement($modalContainer);
};
