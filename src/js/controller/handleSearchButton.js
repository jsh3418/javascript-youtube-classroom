import { $ } from "../utils/DOM.js";
import { addSearchText, store } from "../model/model.js";
import { APIKEY } from "../constants/apikey.js";
import { paintVideoList } from "../view/view.js";

const $searchInputKeyword = $("#search-input-keyword");

export const handleSearchButton = async (event) => {
  event.preventDefault();
  addSearchText($searchInputKeyword);
  const searchData = await searchYoutube(store.searchText);
  paintVideoList(searchData);
};

const searchYoutube = async (searchText) => {
  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&key=${APIKEY}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
