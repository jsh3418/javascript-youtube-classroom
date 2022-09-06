import { $ } from "../utils/DOM.js";
import { removeClassName } from "../utils/utils.js";

export const handleSearchModalButton = () => {
  const $modalContainer = $(".modal-container");
  removeClassName($modalContainer, "hide");
};
