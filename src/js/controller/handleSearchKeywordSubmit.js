import { $ } from "../utils/DOM.js";

const $searchButton = $("#search-button");

export const handleSearchKeywordSubmit = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    $searchButton.click();
  }
};
