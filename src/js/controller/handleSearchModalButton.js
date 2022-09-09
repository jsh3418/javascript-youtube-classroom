import { $ } from "../utils/DOM.js";
import { removeClassName } from "../utils/utils.js";

const $modalContainer = $(".modal-container");

export const handleSearchModalButton = () => {
  removeClassName($modalContainer, "hide");
};
