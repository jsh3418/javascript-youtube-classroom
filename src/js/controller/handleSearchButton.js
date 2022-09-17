import { $ } from "../utils/DOM.js";
import { APIKEY } from "../constants/apikey.js";
import { hideEmptySearchResult, paintVideoList } from "../view/view.js";
import { paintSkeletonUI, removeSkeletonUI } from "../view/skeletonUI.js";
import { BASE_URL, LOAD_VIDEO_COUNT } from "../constants/constants.js";
import { isShowEmptySearchResult } from "../validation/validation.js";
import { addSearchText, addStoreNextPageToken, store } from "../model/model.js";

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
  addStoreNextPageToken(searchData);
};

export const searchYoutube = async (searchText) => {
  const query = {
    q: searchText,
    part: "snippet",
    order: "viewCount",
    type: "video",
    maxResults: LOAD_VIDEO_COUNT,
    pageToken: store.nextPageToken,
    key: APIKEY,
  };

  const queryString = Object.keys(query).reduce((string, key) => (query[key] ? `${string}&${key}=${query[key]}` : `${string}`), "");

  try {
    const response = await fetch(`${BASE_URL}${queryString}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
