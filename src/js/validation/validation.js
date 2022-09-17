import { $ } from "../utils/DOM.js";

const $videoList = $(".video-list");

export const isEmptySearchResult = (searchResult) => {
  return searchResult.pageInfo.resultsPerPage === 0;
};

export const isShowEmptySearchResult = () => {
  const $searchResultNoResult = $(".search-result--no-result");
  return !$searchResultNoResult.classList.contains("hide");
};

export const isScrollBottom = () => {
  return $videoList.scrollHeight - $videoList.scrollTop === $videoList.clientHeight;
};
