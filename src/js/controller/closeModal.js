import { $ } from "../utils/DOM.js";
import { hideElement } from "../view/view.js";

const $modalContainer = $(".modal-container");

export const closeModal = (event) => {
  if (event.target || event.key === "Escape") {
    hideElement($modalContainer);
  }
};
