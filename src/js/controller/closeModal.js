import { $ } from "../utils/DOM.js";
import { hideElement } from "../view/view.js";

const $modalContainer = $(".modal-container");

export const closeModal = (event) => {
  if (!isDimmerClick(event.target.classList) && !isEscapeKey(event.key)) return;

  hideElement($modalContainer);
};

const isDimmerClick = (targetClassList) => targetClassList.contains("dimmer");

const isEscapeKey = (eventKey) => eventKey === "Escape";
