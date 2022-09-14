import { $ } from "../utils/DOM.js";
import { addSearchText, store } from "../model/model.js";
import { APIKEY } from "../constants/apikey.js";
import { hideEmptySearchResult, paintVideoList } from "../view/view.js";
import { paintSkeletonUI, removeSkeletonUI } from "../view/skeletonUI.js";
import { LOAD_VIDEO_COUNT } from "../constants/constants.js";
import { isShowEmptySearchResult } from "../validation/validation.js";

const $searchInputKeyword = $("#search-input-keyword");

export const handleSearchButton = async (event) => {
  event.preventDefault();
  if (isShowEmptySearchResult()) {
    hideEmptySearchResult();
  }
  paintSkeletonUI();
  addSearchText($searchInputKeyword);
  const searchData = await searchYoutube(store.searchText);
  removeSkeletonUI();
  paintVideoList(searchData);
};

const searchYoutube = async (searchText) => {
  try {
    const option = {
      BASE_URL: "https://www.googleapis.com/youtube/v3/search",
      part: "snippet",
      maxResults: LOAD_VIDEO_COUNT,
    };

    const response = await fetch(`${option.BASE_URL}?part=${option.part}&maxResults=${option.maxResults}&q=${searchText}&key=${APIKEY}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
