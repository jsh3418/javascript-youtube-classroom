import { $ } from "../utils/DOM.js";
import { APIKEY } from "../constants/apikey.js";
import { hideElement, paintVideoList } from "../view/view.js";
import { paintSkeletonUI, removeSkeletonUI } from "../view/skeletonUI.js";
import { BASE_URL, LOAD_VIDEO_COUNT, LOCALSTORAGE_KEY } from "../constants/constants.js";
import { addSearchText, addNextPageToken, store } from "../model/model.js";
import { hideSaveButton } from "../view/saveVideos.js";
import { getLocalStorage } from "../utils/utils.js";

const $searchInputKeyword = $("#search-input-keyword");
const $searchResultNoResult = $(".search-result--no-result");

export const handleSearchButton = async (event) => {
  event.preventDefault();
  hideElement($searchResultNoResult);
  paintSkeletonUI();
  addSearchText($searchInputKeyword);
  const searchData = await searchYoutube(store.searchText);
  removeSkeletonUI();
  paintVideoList(searchData);
  addNextPageToken(searchData);
  if (getLocalStorage(LOCALSTORAGE_KEY) !== null) {
    store.saveVideos = getLocalStorage(LOCALSTORAGE_KEY);
    hideSaveButton();
  }
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
