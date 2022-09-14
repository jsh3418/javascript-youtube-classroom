import { $ } from "../utils/DOM.js";

export const isEmptySearchResult = (searchResult) => {
  return searchResult.pageInfo.resultsPerPage === 0;
};

export const isShowEmptySearchResult = () => {
  const $searchResultNoResult = $(".search-result--no-result");
  return !$searchResultNoResult.classList.contains("hide");
};