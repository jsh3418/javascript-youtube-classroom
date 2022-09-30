import { $ } from "../utils/DOM.js";

const $snackbar = $("#snackbar");

export const showSnackbar = (message) => {
  $snackbar.textContent = message;
  $snackbar.classList.add("show");
  setTimeout(() => {
    $snackbar.classList.remove("show");
  }, 2800);
};
