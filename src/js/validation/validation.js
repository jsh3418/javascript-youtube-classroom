import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";

export const isEmptySearchResult = (searchResult) => {
  return searchResult.pageInfo.resultsPerPage === 0;
};

export const isScrollBottom = (element) => {
  return element.scrollHeight - element.scrollTop === element.clientHeight;
};

export const isSaveVideo = (id) => {
  return store.saveVideos.some((video) => {
    return video.dataVideoId === id;
  });
};

export const isEmptySaveVideoList = () => {
  const $saveVideoList = $("#save-video-list");
  return $saveVideoList.childElementCount === 0;
};
